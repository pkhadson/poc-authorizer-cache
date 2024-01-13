# AWS Lambda Authorizer Cache POC

This repository contains a proof-of-concept (POC) for testing the cache of a Lambda Authorizer. The POC is built using `aws-cdk`, `@nestjs`, and `@nest-cdk`.

## Objectives

- [ ] Create a cache policy for the Lambda Authorizer using CDK
- [ ] Code-based setup - This means that the cache can be configured solely through code, without requiring manual action. This is also known as "Infrastructure as Code" (IaC).
- [ ] Control the fields that should be cached
- [ ] In this case, we will cache the following: JWT and Header business-id. The cache will be oriented by these two fields.

## Getting Started

```shell
pnpm install
npm run deploy:all
```
