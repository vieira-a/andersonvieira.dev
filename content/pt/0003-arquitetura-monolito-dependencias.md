---
title: "Modularidade não é usar pastas: é controlar dependências"
date: "2026-03-04"
description: "Seu monolito parece modular? Cuidado: dependências diretas entre domínios podem destruir sua arquitetura."
tags:
  [
    "arquitetura-de-software",
    "monolito-modular",
    "inversao-de-dependencia",
    "design-de-codigo",
    "nestjs",
  ]
image: "/images/dependency_inversion_banner.jpg"
slug: "seu-monolito-parece-modular"
---

No artigo anterior, argumentei que modularidade é uma decisão conceitual. Que dividir um sistema em microservices não resolve problemas estruturais se os limites entre domínios continuam mal definidos.

Mas essa discussão só se torna concreta quando olhamos para o código.

É relativamente comum encontrar backends organizados por domínio:

```
src/
  modules/
    order/
    stock/
```

Cada contexto possui seu módulo no framework, seus services, seus repositories. Visualmente, o sistema parece organizado.

Ainda assim, pequenas mudanças exigem atravessar múltiplos domínios. O motivo quase sempre está nas dependências.

Vamos olhar um exemplo simples:

> Nota: os exemplos abaixo são apenas ilustrativos.

## Dependência direta entre domínios

Considere dois domínios:

- `Order`
- `Stock`

Ao criar um pedido, precisamos verificar e reservar estoque.

Uma implementação comum em NestJS ficaria assim:

```ts
// order.service.ts

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly stockService: StockService, // dependência direta
  ) {}

  async createOrder(input: CreateOrderDto) {
    const available = await this.stockService.checkAvailability(
      input.productId,
      input.quantity,
    );

    if (!available) {
      throw new Error("Insufficient stock");
    }

    await this.stockService.reserve(input.productId, input.quantity);

    return this.orderRepository.save(input);
  }
}
```

Nada aqui está “errado” do ponto de vista técnico imediato.

O código compila. A injeção de dependência funciona. O fluxo é claro.

Mas o problema é estrutural!

O domínio de `Order` conhece diretamente o `StockService`.

Ele conhece seus métodos e depende da sua forma de operação.

Se o domínio de estoque mudar internamente, há grande chance de o domínio de pedidos também precisar mudar.

A separação está nas pastas, mas a dependência continua atravessando domínios.

Visualmente:

```
OrderService ───────▶ StockService
```

Essa seta é o que define o acoplamento.

## Invertendo a dependência

Se queremos preservar limites, o domínio **consumidor** não deve depender da implementação do domínio **fornecedor**.

Ele deve depender apenas de uma capacidade que precisa.

Daí, nasce o contrato no domínio **consumidor**.

### 1. Definindo a necessidade em termos de negócio

```ts
// order/ports/stock.port.ts

export interface StockPort {
  checkAvailability(productId: string, quantity: number): Promise<boolean>;
  reserve(productId: string, quantity: number): Promise<void>;
}
```

Observe a diferença.

O domínio de pedidos não está dizendo “quero usar o serviço de estoque”.

Ele está dizendo:

> Para criar um pedido, preciso de algo que saiba verificar e reservar estoque.

É uma necessidade de domínio, não uma dependência concreta.

### 2. O domínio passa a depender do contrato

```ts
// order.service.ts

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly stockPort: StockPort, // dependência do contrato, não da implementação
  ) {}

  async createOrder(input: CreateOrderDto) {
    const available = await this.stockPort.checkAvailability(
      input.productId,
      input.quantity,
    );

    if (!available) {
      throw new Error("Insufficient stock");
    }

    await this.stockPort.reserve(input.productId, input.quantity);

    return this.orderRepository.save(input);
  }
}
```

Agora o domínio de `Order` não conhece `StockService`.

Ele conhece apenas um contrato que expressa sua necessidade.

### 3. A implementação fica no domínio de estoque

```ts
// stock/adapters/stock.adapter.ts

@Injectable()
export class StockAdapter implements StockPort {
  constructor(private readonly stockService: StockService) {}

  async checkAvailability(productId: string, quantity: number) {
    return this.stockService.checkAvailability(productId, quantity);
  }

  async reserve(productId: string, quantity: number) {
    return this.stockService.reserve(productId, quantity);
  }
}
```

Estruturalmente, a dependência muda:

Antes:

```
OrderService ───────▶ StockService
```

Depois:

```
OrderService ───────▶ StockPort ◀─────── StockAdapter ───────▶ StockService
```

Agora, o domínio de pedidos depende de uma abstração que ele mesmo define.

E o domínio de estoque fornece uma implementação.

Se o estoque mudar internamente, o domínio de pedidos permanece estável — desde que o contrato continue válido.

Isso é controle de dependência.

## Trade-offs reais

Como nem tudo são flores, e interfaces não são balas de prata, essa abordagem adiciona camadas:

- Mais arquivos
- Mais abstrações
- Mais conceitos para entender
- Mais disciplina estrutural

Em sistemas pequenos, pode parecer exagero.

Se você tem um CRUD simples, talvez essa separação seja desproporcional.

Modularidade não é dogma.

Ela é uma _escolha proporcional ao nível de complexidade e à expectativa de evolução do sistema_.

O problema não é usar dependência direta em um protótipo.

O problema é manter dependências estruturais frágeis _em sistemas que você sabe que vão crescer_.

## Usar interface não garante modularidade

Este é um erro mais sutil.

Muitas equipes introduzem interfaces, mas continuam vazando detalhes internos pelo contrato.

Por exemplo:

```ts
export interface StockPort {
  reserve(productId: string, quantity: number): Promise<StockEntity>;
}
```

Se `StockEntity` pertence ao domínio de estoque, o domínio de pedidos passa a conhecer sua estrutura interna.

Nesse caso, você trocou dependência concreta por dependência estrutural.

A inversão foi apenas sintática.

Modularidade exige que o contrato seja definido em termos de negócio, não em termos de implementação.

## Mas então, o que realmente define modularidade?

Modularidade não impede que domínios conversem. Ela impede que dependam diretamente das implementações uns dos outros.

Ela reduz o impacto de mudança.

Se alterar estoque exige alterar pedidos, se alterar pedidos exige alterar estoque, você tem organização visual — mas não tem isolamento estrutural.

Um monólito pode ser estruturalmente saudável. E um conjunto de microservices pode ser estruturalmente caótico.

A diferença não está na quantidade de processos. Está no controle explícito das dependências.

Separar diretórios é fácil.

Separar dependências exige intenção.

Modularidade não é onde o código está. É quem pode depender de quem.
