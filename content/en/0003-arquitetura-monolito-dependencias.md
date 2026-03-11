---
title: "Modularity isn't about using folders: it's about controlling dependencies"
date: "2026-03-04"
description: "Does your monolith look modular? Beware: direct dependencies between domains can destroy your architecture."
tags:
  [
    "software-architecture",
    "modular-monolith",
    "dependency-inversion",
    "code-design",
    "nestjs",
  ]
image: "/images/dependency_inversion_banner.jpg"
slug: "your-monolith-looks-modular"
---

In the previous article, I argued that modularity is a conceptual decision. Dividing a system into microservices doesn't solve structural problems if the boundaries between domains remain poorly defined.

But this discussion only becomes concrete when we look at the code.

It is relatively common to find backends organized by domain:

```
src/
  modules/
    order/
    stock/
```

Each context has its module in the framework, its services, its repositories. Visually, the system looks organized.

Still, small changes require crossing multiple domains. The reason is almost always the dependencies.

Let's look at a simple example:

> Note: the examples below are illustrative only.

## Direct dependency between domains

Consider two domains:

- `Order`
- `Stock`

When creating an order, we need to check and reserve stock.

A common implementation in NestJS would look like this:

```ts
// order.service.ts

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly stockService: StockService, // direct dependency
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

Nothing here is "wrong" from an immediate technical standpoint.

The code compiles. Dependency injection works. The flow is clear.

But the problem is structural!

The `Order` domain directly knows the `StockService`.

It knows its methods and depends on how it operates.

If the stock domain changes internally, there is a high chance the order domain will also need to change.

The separation is in the folders, but the dependency continues crossing domains.

Visually:

```
OrderService ───────▶ StockService
```

This arrow is what defines the coupling.

## Inverting the dependency

If we want to preserve boundaries, the **consumer** domain must not depend on the implementation of the **supplier** domain.

It must depend only on a capability it needs.

From there, the contract is born in the **consumer** domain.

### 1. Defining the need in business terms

```ts
// order/ports/stock.port.ts

export interface StockPort {
  checkAvailability(productId: string, quantity: number): Promise<boolean>;
  reserve(productId: string, quantity: number): Promise<void>;
}
```

Notice the difference.

The orders domain is not saying "I want to use the stock service".

It is saying:

> To create an order, I need something that knows how to check and reserve stock.

It is a domain need, not a concrete dependency.

### 2. The domain starts depending on the contract

```ts
// order.service.ts

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly stockPort: StockPort, // depending on the contract, not the implementation
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

Now the `Order` domain does not know `StockService`.

It only knows a contract that expresses its need.

### 3. The implementation stays in the stock domain

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

Structurally, the dependency changes:

Before:

```
OrderService ───────▶ StockService
```

After:

```
OrderService ───────▶ StockPort ◀─────── StockAdapter ───────▶ StockService
```

Now, the orders domain depends on an abstraction it defines itself.

And the stock domain provides an implementation.

If the stock changes internally, the orders domain remains stable — as long as the contract remains valid.

This is dependency control.

## Real trade-offs

Since not everything is perfect, and interfaces are not silver bullets, this approach adds layers:

- More files
- More abstractions
- More concepts to understand
- More structural discipline

In small systems, it might seem like overkill.

If you have a simple CRUD, maybe this separation is disproportionate.

Modularity is not dogma.

It is a _choice proportional to the level of complexity and the expectation of system evolution_.

The problem is not using direct dependency in a prototype.

The problem is maintaining fragile structural dependencies _in systems that you know will grow_.

## Using interfaces does not guarantee modularity

This is a more subtle mistake.

Many teams introduce interfaces but continue leaking internal details through the contract.

For example:

```ts
export interface StockPort {
  reserve(productId: string, quantity: number): Promise<StockEntity>;
}
```

If `StockEntity` belongs to the stock domain, the orders domain starts knowing its internal structure.

In this case, you traded concrete dependency for structural dependency.

The inversion was merely syntactic.

Modularity requires the contract to be defined in business terms, not implementation terms.

## So, what really defines modularity?

Modularity does not prevent domains from talking. It prevents them from directly depending on each other's implementations.

It reduces the impact of change.

If changing stock requires changing orders, if changing orders requires changing stock, you have visual organization — but you don't have structural isolation.

## Conclusion

A monolith can be structurally healthy. And a set of microservices can be structurally chaotic.

The difference is not in the number of processes. It is in the explicit control of dependencies.

Separating directories is easy.

Separating dependencies requires intention.

Modularity is not where the code is. It's who can depend on whom.
