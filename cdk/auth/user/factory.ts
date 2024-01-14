import { NestCdkStack } from '@nest-cdk/core/register';
import { Duration } from 'aws-cdk-lib';
import { IdentitySource, RequestAuthorizer } from 'aws-cdk-lib/aws-apigateway';
import { Runtime } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';

const UserAuth = (app: NestCdkStack) => {
  const handler = new NodejsFunction(app, 'auth-lambda', {
    runtime: Runtime.NODEJS_20_X,
    entry: './src/lambda/authorizer.ts',
    handler: 'handler',
  });
  return new RequestAuthorizer(app, 'awesome-api-request-authorizer', {
    handler,
    identitySources: [
      IdentitySource.header('authorization'),
      IdentitySource.header('x-business-id'),
    ],
    resultsCacheTtl: Duration.hours(1),
  });
};

export default UserAuth;
