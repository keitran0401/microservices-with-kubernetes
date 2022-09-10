## Microservices with Kubernetes Project

This is a side project to learn microservices with Kubernetes by Stephen Grider through a Udemy course "Microservices with NodeJS and React"

## Introduction

A monolith server contains the routing, middlewares, business logic and database access to implement ALL FEATURES of an application.

A single microservice contains the routing, middlewares, business logic and database access to implement ONE FEATURE of an application.

- Biggest benefit: each service is entirely self-contained, meaning if a service crashes for any reasons, the rest of the app is still going to work just fine.
- Biggest drawback: data management, ie. the way storing data inside of a service and how to communicate that data between services.

## Why microservices?

Each service should run independently and not interfere with other services (database per service pattern)

- Database schema/structure might change unexpectedly
- Some services might function more efficiently with different types of database's (SQL or NoSQL)

Comunication strategies between services:

- Synchronous: services communicate with each other using direct requests
- Asynchronous: services communicate with each other using events
  - Event bus: receive events and publish them to listeners (RabbitMQ, Kafka, NATs)
  - pros: having no dependencies on other services & extremely fast
  - cons: data duplication -> extra storage -> cloud storage is incredibly cheap!
