import * as cdk from 'aws-cdk-lib';
import { defineConfig } from '@nest-cdk/core/register';
import UserAuth from './auth/user/factory';

const app = new cdk.App();

defineConfig({
  app,
  name: 'poc-authorizer-cache',
  stage: 'dev',
  authorizers: {
    UserAuth,
  },
});
