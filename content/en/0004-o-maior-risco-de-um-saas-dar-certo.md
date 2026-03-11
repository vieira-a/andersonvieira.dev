---
title: "The biggest risk of a SaaS is succeeding"
date: "2026-03-11"
description: "Production is the environment where architectural decisions are finally tested."
tags: ["saas", "software-engineering", "code-design"]
image: "/images/growing_software.jpg"
slug: "the-biggest-risk-of-a-saas-succeeding"
---

In many SaaS products, there's a healthy obsession: getting the system into production as quickly as possible.

That makes sense.

A product that's not working doesn't generate customers, doesn't generate revenue, and doesn't validate hypotheses.

The problem is that many systems are built as if growth will happen slowly.

But when a SaaS starts growing rapidly, the system begins to reveal technical decisions that seemed harmless at the beginning.

Because Everything Works in the Beginning

In the early stages of a SaaS product, the environment is usually quite predictable.

- Few accesses
- Little data
- Low concurrency
- Low operational complexity

Under these conditions, even poorly designed systems seem to work well.

Heavy queries still execute quickly because the database is small. Synchronous processes don't cause problems because the volume of requests is low. Operations that could generate concurrency simply don't happen frequently enough.

That's where seemingly innocent decisions go unnoticed.

The system works, customers are satisfied, and engineering continues to evolve the product.

When the Product Starts to Gain Traction

At some point, the scenario changes.

More users start using the product simultaneously.

The database grows.

More events start happening at the same time.

And then symptoms that didn't exist before begin to appear.

- Endpoints start to slow down
- The database becomes a bottleneck
- Slow processes start to impact other parts of the system
- Concurrency between transactions starts to generate inconsistencies

None of this usually appears in development or staging environments.

These problems arise when the system finally encounters the real environment.

> Production is the environment where architectural decisions are finally tested.

Problems That Appear When the System Grows

There are problems that simply don't appear while the system is small.

They only arise when the volume of data and the number of users increase.

Some common examples:

- Queries that worked well with thousands of records begin to degrade when the database reaches millions.

- Synchronous processes begin to block requests because they depend on external integrations.

- Seemingly simple operations begin to generate concurrency between transactions.

- Jobs that ran quickly begin to compete for resources with other parts of the system.

In many cases, the problem is not a specific bug.

It lies in architectural decisions made when the system was still small.

These decisions worked well at that time, but were not designed for the scenario that arose later.

## The MVP Challenge

This type of problem often leads to another common discussion in software engineering: the balance between building fast and building well.

Products in the validation phase need to evolve quickly.

An MVP exists precisely to test hypotheses and learn from real user behavior. In this context, trying to anticipate all future problems can easily lead to overengineering.

Applying full tactical DDD, extremely sophisticated architecture, or excessive abstractions to a product that has not yet been validated often generates unnecessary complexity.

Complex architectures are frequently designed for a system that does not yet exist.

And often that system never comes into existence.

What's Usually Not Worth Doing Too Early

Some decisions appear too early in many systems.

Not because they are bad, but because they solve problems that don't yet exist.

Some common examples:

- Microservices before there's even a significant user volume
- Messaging systems for flows that could be synchronous
- Excessive abstractions for still hypothetical scenarios

These decisions usually arise with the intention of preparing the system for the future.

The problem is that this future may never arrive.

Many products fail before reaching the scale level that would justify this type of architecture.

What Mature Engineering Does Early on

Avoiding overengineering doesn't mean ignoring engineering.

There are some simple practices that often make a big difference when the system starts to grow.

Some of them are relatively inexpensive to implement from the beginning:

- Structured logs
- Metrics
- Observability
- Automated tests on critical parts
- Basic domain separation
- Correct database indexes

Tests don't prevent all production problems, but they help reduce a specific type of risk: breaking something that already worked.

When the system starts to evolve rapidly, the ability to make changes safely becomes as important as performance or scalability.

Without tests, each change in the code carries an increasing level of uncertainty.

And the larger the system gets, the more expensive it becomes to evolve it without this type of security.

## Engineering for Systems That Can Grow

Building software that can grow doesn't mean predicting all future needs.

It simply means avoiding decisions that create unnecessary barriers to evolution.

Separating basic responsibilities in the code, avoiding unnecessary coupling, and making system behavior visible through logs and metrics are examples of this.

These practices are not luxuries.

They are simply ways to make the system more understandable when it starts operating at real scale.

## Conclusion

In SaaS, getting the product up and running quickly is important.

But launching it without considering the consequences of growth is a technical debt that almost always comes with interest.

The biggest problem with a system isn't when it fails.

It's when it starts failing precisely when the product is finally starting to succeed.
