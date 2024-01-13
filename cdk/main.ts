import { defineConfig } from "@nest-cdk/core/register";
import * as cdk from "aws-cdk-lib";

const app = new cdk.App();

defineConfig({
  app,
  name: "poc-authorizer-cache",
  stage: "dev",
});
