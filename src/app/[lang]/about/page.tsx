import { getDictionary, Locale } from "@/lib/i18n";
import { Metadata } from "next";
import Image from "next/image";
import PrintButton from "@/components/PrintButton";

export const metadata: Metadata = {
  title: "Professional Journey",
  description:
    "A narrative about growth, responsibility and architectural maturity.",
};

interface TimelineItemProps {
  period: string;
  company: string;
  role: string;
  context: string;
  impact?: string;
  technologies?: string[];
  lessons?: string;
  isPt: boolean;
  children: React.ReactNode;
}

const TimelineItem = ({
  period,
  company,
  role,
  context,
  impact,
  technologies,
  lessons,
  isPt,
  children,
}: TimelineItemProps) => (
  <div className="relative pl-8 pb-12 border-l border-zinc-200 dark:border-zinc-800 last:pb-0">
    <div className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-zinc-300 dark:bg-zinc-700 border border-white dark:border-zinc-950" />
    <div className="space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 tracking-tight">
          {role}
        </h3>
        <span className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {period}
        </span>
      </div>
      <div className="text-sm font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
        {company}
      </div>

      <div className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed space-y-4">
        <p className="font-medium text-zinc-800 dark:text-zinc-200 italic">
          {context}
        </p>
        <div className="prose prose-zinc dark:prose-invert max-w-none prose-p:leading-relaxed prose-p:text-zinc-600 dark:prose-p:text-zinc-400">
          {children}
        </div>
      </div>

      {impact && (
        <div className="mt-4 p-4 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 rounded-md">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-2">
            {isPt ? "Impacto" : "Impact"}
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">{impact}</p>
        </div>
      )}

      {lessons && (
        <div className="mt-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 mb-2">
            {isPt ? "Lições Aprendidas" : "Lessons Learned"}
          </h4>
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {lessons}
          </p>
        </div>
      )}

      {technologies && (
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-[10px] font-bold uppercase tracking-tighter border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 rounded bg-zinc-50/50 dark:bg-zinc-900/50"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  const lang = resolvedParams.lang as Locale;
  const isPt = lang === "pt";
  const t = getDictionary(lang);

  return (
    <div className="space-y-24 animate-in fade-in duration-700 print:space-y-12">
      {/* Print-only Header */}
      <div className="hidden print:block border-b-2 border-zinc-900 pb-8 mb-12">
        <div className="flex justify-between items-start">
          <div className="flex gap-6 items-center">
            <div className="relative w-24 h-24 overflow-hidden rounded-xl border border-zinc-200">
              <Image
                src="/profile.jpg"
                alt="Anderson Vieira"
                fill
                className="object-cover object-[center_5%]"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-zinc-900">
                Anderson Vieira
              </h1>
              <p className="text-lg text-zinc-600 font-medium">
                Software Developer
              </p>
            </div>
          </div>
          <div className="text-right text-sm text-zinc-500">
            <p>Salvador, BA — Brasil</p>
            <p>linkedin.com/in/vieira-a</p>
            <p>github.com/vieira-a</p>
            <p>andersonvieira-dev.vercel.app</p>
          </div>
        </div>
      </div>

      <section className="grid gap-12 lg:grid-cols-[1fr_220px] items-center print:grid-cols-1 print:gap-6">
        {/* Hero */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-zinc-900 dark:text-zinc-100 leading-[1.1]">
            {isPt
              ? "A engenharia não termina no código; ela começa na compreensão dos sistemas."
              : "Engineering doesn't end at code; it begins at the understanding of systems."}
          </h1>
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
            {isPt
              ? "Uma visão sobre evolução técnica, maturidade arquitetural e a responsabilidade de construir software resiliente."
              : "A perspective on technical evolution, architectural maturity, and the responsibility of building resilient software."}
          </p>
        </div>

        {/* Photo Container */}
        <div className="order-first lg:order-last print:hidden">
          <div className="relative aspect-[4/5] w-48 lg:w-44 mx-auto lg:ml-auto lg:mr-0 overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 shadow-xl shadow-zinc-200/50 dark:shadow-none">
            <Image
              src="/profile.jpg"
              alt="Anderson Vieira"
              fill
              className="object-cover object-[center_15%]"
              priority
            />
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="prose prose-zinc dark:prose-invert max-w-none">
        <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
          {isPt ? (
            <>
              Minha jornada profissional é marcada por uma transição
              intencional: da base física da infraestrutura para a abstração
              lógica do desenvolvimento backend. Essa trajetória me deu uma
              visão holística sobre como o software respira em produção, onde a
              performance e a estabilidade são medidas em métricas de negócio e
              não apenas em linhas de comando.
              <br />
              <br />
              <span className="print:hidden">
                Abaixo, detalho as fases dessa evolução, focando não apenas nas
                tecnologias, mas no crescimento da responsabilidade e nas
                decisões que moldaram minha forma de pensar sistemas.
              </span>
            </>
          ) : (
            <>
              My professional journey is marked by an intentional transition:
              from the physical foundation of infrastructure to the logical
              abstraction of backend development. This path has given me a
              holistic view of how software breathes in production, where
              performance and stability are measured by business metrics and not
              just command lines.
              <br />
              <br />
              <span className="print:hidden">
                Below, I detail the phases of this evolution, focusing not just
                on technologies, but on the growth of responsibility and the
                decisions that shaped my way of thinking about systems.
              </span>
            </>
          )}
        </p>
      </section>

      {/* Timeline Section */}
      <section className="space-y-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500 border-l-2 border-blue-600 dark:border-cyan-400 pl-4">
          {isPt ? "Trajetória Profissional" : "Professional Journey"}
        </h2>

        <div className="space-y-0">
          {/* Phase 1: Infrastructure Foundation */}
          <div className="mb-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-8 opacity-50">
              {isPt
                ? "Fase 1: Fundações em Infraestrutura"
                : "Phase 1: Infrastructure Foundation"}
            </h3>

            <TimelineItem
              isPt={isPt}
              period="Set 2011 – Fev 2016"
              company="TOP ENGENHARIA"
              role={
                isPt
                  ? "Estagiário de TI e Analista de Infraestrutura"
                  : "IT Intern and Infrastructure Analyst"
              }
              context={
                isPt
                  ? "Gestão de ativos, suporte a servidores e implantação de infraestrutura física e lógica."
                  : "Asset management, server support, and deployment of physical and logical infrastructure."
              }
              impact={
                isPt
                  ? "Redução significativa de custos através da internalização de serviços e melhor gestão de ativos."
                  : "Significant cost reduction through service internalization and better asset management."
              }
              lessons={
                isPt
                  ? "Software não existe no vácuo. Cada decisão de código impacta o consumo de recursos e a viabilidade operacional."
                  : "Software doesn't exist in a vacuum. Every code decision impacts resource consumption and operational viability."
              }
            >
              {isPt ? (
                <p>
                  Iniciei minha carreira lidando com a &quot;física&quot; do
                  software. Como estagiário e posteriormente analista, fui
                  responsável por garantir que os sistemas tivessem onde rodar.
                  Gerenciei servidores de aplicação, bancos de dados e redes em
                  múltiplas unidades. Esta fase foi crucial para entender que a
                  confiabilidade começa muito antes do primeiro comando{" "}
                  <code>git push</code>. A responsabilidade de manter filiais
                  operantes me ensinou a valorizar a redundância e a manutenção
                  preventiva.
                </p>
              ) : (
                <p>
                  I began my career dealing with the &quot;physics&quot; of
                  software. As an intern and later an analyst, I was responsible
                  for ensuring that systems had a place to run. I managed
                  application servers, databases, and networks across multiple
                  units. This phase was crucial for understanding that
                  reliability starts long before the first <code>git push</code>{" "}
                  command. The responsibility of keeping branches operational
                  taught me to value redundancy and preventive maintenance.
                </p>
              )}
            </TimelineItem>

            <TimelineItem
              isPt={isPt}
              period="Fev 2016 – Ago 2021"
              company="Pedreira Interativa Ltda"
              role={
                isPt
                  ? "Analista de Sistemas | TOTVS Protheus"
                  : "Systems Analyst | TOTVS Protheus"
              }
              context={
                isPt
                  ? "Gestão de infraestrutura corporativa e suporte especializado a ERP."
                  : "Corporate infrastructure management and specialized ERP support."
              }
              impact={
                isPt
                  ? "Estruturação de central de serviços e redução de custos operacionais com licenciamento e consultorias."
                  : "Service center structuring and reduction of operational costs with licensing and consultancies."
              }
              lessons={
                isPt
                  ? "A tecnologia deve servir ao processo de negócio. Sistemas complexos exigem governança e processos claros (ITIL)."
                  : "Technology must serve the business process. Complex systems require governance and clear processes (ITIL)."
              }
            >
              {isPt ? (
                <p>
                  Aqui, o foco mudou da infraestrutura pura para os processos de
                  negócio. O TOTVS Protheus era o sistema nervoso da
                  organização. Gerenciar essa complexidade exigiu não apenas
                  conhecimento técnico, mas a implementação de processos ITIL
                  para garantir que as mudanças fossem previsíveis. Aprendi que
                  a escalabilidade de uma empresa depende da robustez de seus
                  fluxos de dados.
                </p>
              ) : (
                <p>
                  Here, the focus shifted from pure infrastructure to business
                  processes. The Protheus ERP was the nervous system of the
                  organization. Managing this complexity required not only
                  technical knowledge but the implementation of ITIL processes
                  to ensure that changes were predictable. I learned that a
                  company&apos;s scalability depends on the robustness of its
                  data flows.
                </p>
              )}
            </TimelineItem>
          </div>

          {/* Phase 2: Transition to Development */}
          <div className="mb-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-8 opacity-50">
              {isPt
                ? "Fase 2: Transição para o Desenvolvimento"
                : "Phase 2: Transition to Development"}
            </h3>

            <TimelineItem
              isPt={isPt}
              period="Jan 2022 – Mar 2024"
              company="UPTI"
              role={
                isPt
                  ? "Software Developer (Full Stack)"
                  : "Software Developer (Full Stack)"
              }
              context={
                isPt
                  ? "Desenvolvimento de soluções digitais sob demanda, da concepção ao deploy."
                  : "Development of on-demand digital solutions, from conception to deployment."
              }
              technologies={[
                "Node.js",
                "NestJS",
                "React",
                "TypeScript",
                "MongoDB",
                "TypeORM",
              ]}
              lessons={
                isPt
                  ? "O desenvolvimento moderno exige visão de ponta a ponta. A fronteira entre backend e frontend é onde a experiência do usuário se concretiza."
                  : "Modern development requires end-to-end vision. The border between backend and frontend is where the user experience takes shape."
              }
            >
              {isPt ? (
                <p>
                  Decidi cruzar a ponte definitivamente para a construção de
                  sistemas. Na UPTI, atuei em projetos que exigiam agilidade e
                  precisão. Construir APIs com NestJS e interfaces com React me
                  permitiu aplicar meu background de infraestrutura para criar
                  deploys mais seguros e arquiteturas mais observáveis. Foi o
                  período de consolidação da minha stack técnica atual.
                </p>
              ) : (
                <p>
                  I decided to definitively cross the bridge to building
                  systems. At UPTI, I worked on projects that required agility
                  and precision. Building APIs with NestJS and interfaces with
                  React allowed me to apply my infrastructure background to
                  create safer deployments and more observable architectures. It
                  was the period of consolidation for my current technical
                  stack.
                </p>
              )}
            </TimelineItem>

            <TimelineItem
              isPt={isPt}
              period="Fev 2024 – Abr 2024"
              company="Aprimora Conhecimento"
              role={
                isPt
                  ? "Backend Developer (Voluntário)"
                  : "Backend Developer (Volunteer)"
              }
              context={
                isPt
                  ? "Modelagem de APIs REST e apoio técnico a novos desenvolvedores."
                  : "REST API modeling and technical support for new developers."
              }
              impact={
                isPt
                  ? "Padronização do código e maior estabilidade na aplicação através de padrões arquiteturais."
                  : "Code standardization and greater stability in the application through architectural patterns."
              }
              technologies={["Node.js", "NestJS", "TypeScript", "PostgreSQL"]}
            >
              {isPt ? (
                <p>
                  Neste projeto voluntário, foquei na estruturação de padrões.
                  Apoiar novos desenvolvedores me ensinou que a clareza do
                  código é uma forma de liderança. A estabilidade de um sistema
                  é diretamente proporcional à facilidade com que novos
                  integrantes conseguem compreendê-lo.
                </p>
              ) : (
                <p>
                  In this volunteer project, I focused on structuring patterns.
                  Supporting new developers taught me that code clarity is a
                  form of leadership. A system&apos;s stability is directly
                  proportional to how easily new members can understand it.
                </p>
              )}
            </TimelineItem>
          </div>

          {/* Phase 3: SaaS Product Engineering */}
          <div className="mb-16">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-8 opacity-50">
              {isPt
                ? "Fase 3: Engenharia de Produtos SaaS"
                : "Phase 3: SaaS Product Engineering"}
            </h3>

            <TimelineItem
              isPt={isPt}
              period="Abr 2024 – Jun 2025"
              company="Hostvsl"
              role={isPt ? "Backend Developer" : "Backend Developer"}
              context={
                isPt
                  ? "Plataforma SaaS de alta performance focada em funis de vídeo."
                  : "High-performance SaaS platform focused on video funnels."
              }
              impact={
                isPt
                  ? "+22% aumento na conversão e crescimento de 18% na receita através de melhorias técnicas e testes A/B."
                  : "+22% increase in conversion and 18% revenue growth through technical improvements and A/B testing."
              }
              technologies={[
                "Node.js",
                "NestJS",
                "Arquitetura Modular",
                "Mensageria",
                "Observabilidade",
                "MySQL",
              ]}
              lessons={
                isPt
                  ? "Performance é uma feature de negócio. Milissegundos salvos no backend traduzem-se diretamente em receita."
                  : "Performance is a business feature. Milliseconds saved in the backend translate directly into revenue."
              }
            >
              {isPt ? (
                <p>
                  Na Hostvsl, a escala era o desafio. Trabalhei em uma
                  arquitetura modular que suportava pipelines de testes A/B e
                  rastreio de eventos em tempo real. Cada decisão arquitetural
                  era baseada em métricas de observabilidade. Aprendi a lidar
                  com sistemas que não podem parar e onde o impacto de um erro é
                  medido em perda de faturamento em tempo real.
                </p>
              ) : (
                <p>
                  At Hostvsl, scale was the challenge. I worked on a modular
                  architecture that supported A/B testing pipelines and
                  real-time event tracking. Every architectural decision was
                  based on observability metrics. I learned to deal with systems
                  that cannot stop and where the impact of an error is measured
                  in real-time revenue loss.
                </p>
              )}
            </TimelineItem>

            <TimelineItem
              isPt={isPt}
              period="Ago 2025 – Fev 2026"
              company="Replic"
              role={isPt ? "Backend Developer" : "Backend Developer"}
              context={
                isPt
                  ? "Plataforma SaaS para criação e edição de páginas com crescimento acelerado de usuários."
                  : "SaaS platform for page creation and editing with rapid user base growth."
              }
              impact={
                isPt
                  ? "Recuperação da confiabilidade financeira via novo sistema de billing, redução de custos com rastreio próprio de métricas e expansão de mercado com revenda de domínios."
                  : "Financial reliability recovery via a new billing system, cost reduction through custom metric tracking, and market expansion via domain reselling."
              }
              technologies={[
                "Node.js",
                "NestJS",
                "TypeScript",
                "Arquitetura Modular",
                "Observabilidade",
              ]}
              lessons={
                isPt
                  ? "A sustentabilidade de um SaaS depende de um faturamento preciso e da visibilidade total sobre como os usuários consomem recursos."
                  : "SaaS sustainability depends on precise billing and total visibility into how users consume resources."
              }
            >
              {isPt ? (
                <p>
                  Na Replic, foquei em viabilizar o crescimento da base de
                  clientes através de evolução estrutural. Reconstruí
                  completamente o sistema de billing para garantir precisão e
                  sustentabilidade. Implementar um motor de analytics interno de
                  alta escala foi fundamental para a tomada de decisão baseada
                  em dados. Além disso, liderei o desenvolvimento técnico para a
                  plataforma atuar como revendedora de domínios, consolidando a
                  viabilidade de novos modelos de negócio no backend.
                </p>
              ) : (
                <p>
                  At Replic, I focused on enabling user base growth through
                  structural evolution. I completely rebuilt the billing system
                  to ensure precision and sustainability. Implementing a custom
                  high-scale analytics engine was fundamental for data-driven
                  decision making. Additionally, I led the technical development
                  to allow the platform to act as a domain reseller,
                  consolidating the viability of new business models in the
                  backend.
                </p>
              )}
            </TimelineItem>
          </div>

          {/* Phase 4: Architectural Maturity & Technical Leadership */}
          <div className="mb-0">
            <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-900 dark:text-zinc-100 mb-8 opacity-50">
              {isPt
                ? "Fase 4: Maturidade Arquitetural e Liderança"
                : "Phase 4: Architectural Maturity & Leadership"}
            </h3>

            <TimelineItem
              isPt={isPt}
              period="Jun 2025 – Atual"
              company="Evolutz"
              role={isPt ? "Backend Developer" : "Backend Developer"}
              context={
                isPt
                  ? "Sistemas SaaS em produção com foco em estabilização e evolução sustentável."
                  : "SaaS systems in production with a focus on stabilization and sustainable evolution."
              }
              technologies={["AWS", "Docker", "CI/CD", "Node.js", "NestJS"]}
              lessons={
                isPt
                  ? "Refatorar não é apenas mudar código; é garantir que o sistema continue gerando valor enquanto sua estrutura é fortalecida."
                  : "Refactoring isn't just about changing code; it's ensuring the system continues to generate value while its structure is strengthened."
              }
            >
              {isPt ? (
                <p>
                  Na Evolutz, assumi o desafio de estabilizar módulos com
                  problemas estruturais. Meu trabalho envolve a organização de
                  camadas e domínios, visando reduzir falhas recorrentes e
                  garantir uma evolução sustentável do produto. Decisões
                  técnicas sobre modelagem de dados e infraestrutura em nuvem
                  são parte do meu dia a dia.
                </p>
              ) : (
                <p>
                  At Evolutz, I took on the challenge of stabilizing modules
                  with structural issues. My work involves organizing layers and
                  domains, aiming to reduce recurring failures and ensure
                  sustainable product evolution. Technical decisions about data
                  modeling and cloud architecture are part of my daily routine.
                </p>
              )}
            </TimelineItem>

            <TimelineItem
              isPt={isPt}
              period="Fev 2025 – Atual"
              company="Universidade Católica do Salvador"
              role={
                isPt
                  ? "Backend Developer | Liderança Técnica"
                  : "Backend Developer | Technical Leadership"
              }
              context={
                isPt
                  ? "Projeto acadêmico com foco em desenvolvimento de sistemas reais em múltiplos times."
                  : "Academic project focused on real systems development across multiple teams."
              }
              impact={
                isPt
                  ? "Melhoria na qualidade das entregas, redução de retrabalho e evolução técnica acelerada do time."
                  : "Improved delivery quality, reduced rework, and accelerated technical evolution of the team."
              }
              technologies={[
                "Java",
                "Spring Boot",
                "Arquitetura Modular",
                "Mensageria",
              ]}
              lessons={
                isPt
                  ? "A liderança técnica é exercida através do exemplo e do suporte constante. O sucesso do time é a métrica definitiva."
                  : "Technical leadership is exercised through example and constant support. The team's success is the ultimate metric."
              }
            >
              {isPt ? (
                <p>
                  Atuando como referência técnica, meu papel é elevar a barra de
                  qualidade dos projetos. Defino padrões, realizo code reviews e
                  apoio múltiplos times na solução de problemas complexos
                  utilizando Java e Spring Boot. É gratificante ver como a
                  estruturação de testes e a integração contínua transformam a
                  confiança da equipe.
                </p>
              ) : (
                <p>
                  Acting as a technical reference, my role is to raise the
                  quality bar of the projects. I define standards, perform code
                  reviews, and support multiple teams in solving complex
                  problems using Java and Spring Boot. It is rewarding to see
                  how test structuring and continuous integration transform the
                  team&apos;s confidence.
                </p>
              )}
            </TimelineItem>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="space-y-8 pt-16 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {isPt ? "Competências Centralizadas" : "Core Competencies"}
        </h2>

        <div className="grid gap-12 sm:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
              {isPt ? "Arquitetura e Design" : "Architecture & Design"}
            </h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed list-disc pl-4 font-normal">
              <li>
                {isPt
                  ? "Desenvolvimento de arquiteturas modulares e escaláveis"
                  : "Development of modular and scalable architectures"}
              </li>
              <li>
                {isPt
                  ? "Modelagem orientada a domínios e camadas"
                  : "Domain and layer-oriented modeling"}
              </li>
              <li>
                {isPt
                  ? "Implementação de sistemas resilientes e observáveis"
                  : "Implementation of resilient and observable systems"}
              </li>
              <li>
                {isPt
                  ? "Escolhas técnicas pragmáticas baseadas em restrições de negócio"
                  : "Pragmatic technical choices based on business constraints"}
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-100 tracking-tight">
              {isPt ? "Engenharia e Liderança" : "Engineering & Leadership"}
            </h3>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed list-disc pl-4 font-normal">
              <li>
                {isPt
                  ? "Mentoria técnica e condução de code reviews"
                  : "Technical mentoring and conducting code reviews"}
              </li>
              <li>
                {isPt
                  ? "Estruturação de pipelines de CI/CD e automação"
                  : "Structuring CI/CD pipelines and automation"}
              </li>
              <li>
                {isPt
                  ? "Otimização de performance voltada a conversão/receita"
                  : "Performance optimization focused on conversion/revenue"}
              </li>
              <li>
                {isPt
                  ? "Gestão de dívida técnica e refatoração estratégica"
                  : "Technical debt management and strategic refactoring"}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Current Direction */}
      <section className="space-y-8 pt-16 border-t border-zinc-200 dark:border-zinc-800">
        <h2 className="text-xs font-bold uppercase tracking-widest text-zinc-400 dark:text-zinc-500">
          {isPt ? "Direção Atual" : "Current Direction"}
        </h2>
        <div className="max-w-2xl">
          <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 font-normal">
            {isPt
              ? "Atualmente, meu foco está na propriedade arquitetural e na profundidade das decisões técnicas. Acredito que o papel de um engenheiro de software vai além de escrever código eficiente; trata-se de garantir que o sistema possa evoluir sem se tornar um fardo para o negócio. Estou particularmente interessado em como a observabilidade e a mensageria podem ser usadas para construir sistemas cada vez mais inteligentes e autônomos."
              : "Currently, my focus is on architectural ownership and technical decision depth. I believe the role of a software engineer goes beyond writing efficient code; it's about ensuring the system can evolve without becoming a burden to the business. I am particularly interested in how observability and messaging can be used to build increasingly intelligent and autonomous systems."}
          </p>
          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400 font-normal">
            {isPt ? (
              <>
                Além da atuação profissional, sou membro ativo do{" "}
                <a
                  href="https://techleads.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-cyan-400 hover:underline"
                >
                  TechLeads.club
                </a>
                , onde participo de discussões avançadas sobre arquitetura e
                liderança técnica com outros profissionais do setor.
              </>
            ) : (
              <>
                Beyond professional work, I am an active member of{" "}
                <a
                  href="https://techleads.club"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-cyan-400 hover:underline"
                >
                  TechLeads.club
                </a>
                , where I participate in advanced discussions on architecture
                and technical leadership with other industry professionals.
              </>
            )}
          </p>
        </div>
        <div className="flex justify-center pb-8 print:hidden">
          <PrintButton label={t.about.printResume} />
        </div>
      </section>

      {/* Closing - hidden on print for brevity */}
      <footer className="pt-16 pb-8 text-center border-t border-zinc-200 dark:border-zinc-800 print:hidden">
        <p className="text-sm font-medium italic text-zinc-400 dark:text-zinc-500 italic max-w-xl mx-auto">
          {isPt
            ? "&quot;Sistemas são reflexos de como as pessoas pensam e colaboram.&quot;"
            : "&quot;Systems are reflections of how people think and collaborate.&quot;"}
        </p>
      </footer>
    </div>
  );
}
