# Introduction to Minikube and Kubernetes

This repository contains simple configurations to start learning Kubernetes, using Minikube as a local development environment.

## Table of Contents

1. [Ingress Controller and NGINX](#ingress-controller-and-nginx)
2. [SSL/TLS Termination](#ssltls-termination)
3. [Horizontal Pod Autoscaling (HPA)](#horizontal-pod-autoscaling-hpa)
4. [Stateful Sets](#stateful-sets)
5. [Config Maps](#config-maps)
6. [MongoDB Service and Deployment](#mongodb-service-and-deployment)
7. [Simple JS App](#simple-js-app)

## Ingress Controller and NGINX

We set up an NGINX ingress controller to manage access to services in our Kubernetes cluster. This included creating an ingress resource to route traffic to our `hello-kube` service based on the domain name.

### Key Commands:
- Enabling Ingress in Minikube: `minikube addons enable ingress`
- Applying Ingress Configuration: `kubectl apply -f ingress.yaml`

## SSL/TLS Termination

Implemented SSL/TLS termination at the ingress level using a self-signed certificate. This ensures that traffic between the client and our service is encrypted.

### Key Commands:
- Generating Self-Signed Certificate: `openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout tls.key -out tls.crt -subj "/CN=hello-kube.local/O=hello-kube"`
- Creating Secret for TLS Certificate: `kubectl create secret tls hello-kube-tls --key tls.key --cert tls.crt`
- Applying Ingress SSL Configuration: `kubectl apply -f ingress-ssl.yaml`

## Horizontal Pod Autoscaling (HPA)

Configured HPA to automatically scale the number of pods in our `hello-kube` deployment based on observed CPU utilization.

### Key Commands:
- Applying HPA Configuration: `kubectl apply -f hpa.yaml`
- Viewing HPA Status: `kubectl get hpa`

## Stateful Sets

Although we didn't create a specific example, we discussed the importance of stateful sets for workloads requiring stable network identities and persistent storage.

## Config Maps

Config maps are used to store non-confidential data in key-value pairs. Pods can consume config maps as environment variables, command-line arguments, or as configuration files in a volume.

## MongoDB Service and Deployment

Set up a MongoDB service and deployment. The configuration included the necessary components to run MongoDB in our Kubernetes cluster.

## Simple JS App

Simple JS app that runs on nodes. When booting up first time it will seed some data that you can check in your MongoDB if it is seeded.