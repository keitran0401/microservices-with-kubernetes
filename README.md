# Microservices with Kubernetes Project

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

## Docker

Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.

A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. It should have:

- A base image
- Commands to install additional programs
- A command to run on container startup

## Kubernetes

Kubernetes is a tool for automating deployment, scaling, and management of containerized applications (running a bunch of different containers).

- Kubernetes Cluster is a collection of Nodes (virtual machines). Master is a program to manage everything in the Cluster
- Inside a Node:
  1. A Pod can have one or multiple Containers
  2. A Container is in charge of running a Docker Image
  3. A Deployment monitors a set of Pods, make sure they are running and restarts them if they crash
  4. A Cluster IP Service provides an easy-to-remember URL to access a running Pod
  5. A Load Balancer Service tells the Cluster to reach out to the Cloud Provider to provide a Load Balancer
  6. A Load Balancer serves the outside resquests into An Ingress Controller
  7. An Ingress Controller (ingress-nginx) is a Pod with a set of routing rules to distribute traffic to other Pods through Cluster IP Services inside the Cluster

### Skaffold

Skaffold is a command line tool that saves developers time by automating most of the development workflow in Kubernetes from source to deployment in an extensible way
