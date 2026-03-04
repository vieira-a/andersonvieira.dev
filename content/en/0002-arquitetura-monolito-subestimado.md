---
title: "The modular monolith is underrated"
date: "2026-03-03"
description: "Decomposing a system into microservices doesn't fix structural and coupling issues. Understand why internal modularity is the true prerequisite for healthy software architecture."
tags: ["software-architecture", "modular-monolith", "code-design", "reflection"]
image: "/images/modular_monolith_banner.jpg"
slug: "the-modular-monolith-is-underrated"
---

There is a recurring trend in software engineering: as a system grows, it’s assumed that the natural next step is to distribute it.

The conversation quickly shifts to microservices, as if the deployment unit were the main determinant of a system's structural quality.

## Growth is not decomposition

Growth and decomposition are not equivalent. And deploy unit is not synonymous with coupling.

Many systems become hard to evolve not because they are monolithic, but because their internal boundaries were never clearly defined. Domains mix, rules cross contexts where they don't belong, dependencies start pointing in multiple directions, and small changes begin producing unexpected side effects.

This kind of degradation is structural, not infrastructural.

Distributing a system under these conditions does not fix the problem. It only redistributes it.

## The illusion of decomposition as an automatic solution

In many contexts, maintenance difficulty is interpreted as a sign that the system has "grown too much." The almost automatic response becomes splitting it into multiple services.

The result, almost always, is the creation of extremely small services, responsible for very restricted portions of logic, but carrying all the operational costs of a distributed system: independent deployment, separate monitoring, remote communication, contract versioning, cross-team coordination, etc.

The granularity of the separation does not justify the introduced complexity.

Separating just to separate does not produce real autonomy. It produces fragmentation.

When the division isn't anchored in well-defined domain boundaries or concrete needs for independent scaling, what you get is just a larger set of coupled parts, now connected by a network.

The cost increases.

Predictability decreases.

Coordination becomes more frequent.

And the original problem remains.

## Deploy unit is not domain unit

A monolith is just a deployment decision: the system runs as a single executable unit.

Modularity is something else.

It's about clarity of responsibilities, boundary definition, and controlling the direction of dependencies.

A system can be monolithic and structurally healthy if its domains are well-delimited. Likewise, it can be distributed and still exhibit excessive coupling.

Before separating processes, you need to separate concepts.

If boundaries aren't clear within a single process, distributing them will only expand the surface area of complexity.

## Modularity precedes decomposition

Distributed architecture solves specific problems: isolated scalability, genuine organizational autonomy, distinct technical constraints. Outside these scenarios, it introduces significant challenges: eventual consistency, latency, more complex observability, higher cognitive overload.

These costs make sense when they address a clear need.

When internal modularity hasn't yet been established, microservices do not represent structural evolution. They merely amplify existing coupling.

Microservices do not create architectural maturity.

They demand prior architectural maturity.

## Before you divide, delimit

Discussions about architecture often start with the system's format: how many services, how many processes, how many repositories.

Perhaps it should start with another question: are the internal boundaries clearly defined enough to support any form of decomposition?

If the answer is negative, the problem isn't the monolith.

It's the absence of modularity.

And that is a conceptual issue, not an infrastructure one.

In an upcoming article, I intend to explore a practical example of how misdirected dependencies compromise modularity, even within a single process.
