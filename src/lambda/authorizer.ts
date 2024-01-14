import { PolicyDocument } from 'aws-lambda';
import { APIGatewayAuthorizerResult } from 'aws-lambda/trigger/api-gateway-authorizer';
import 'source-map-support/register';

export const handler = async function (
  event: any,
): Promise<APIGatewayAuthorizerResult> {
  console.log(`event => ${JSON.stringify(event)}`);

  await fetch('https://auth-test-pk.requestcatcher.com/test');

  const policyDocument: PolicyDocument = {
    Version: '2012-10-17',
    Statement: [
      {
        Action: 'execute-api:Invoke',
        Effect: 'Allow', // return Deny if you want to reject the request
        Resource: '*', // allow any method on any resource path
      },
    ],
  };

  const context = {
    userId: 123,
    companyId: 456,
    role: 'ADMIN',
  };

  const response: APIGatewayAuthorizerResult = {
    principalId: 'PKHADSON',
    policyDocument,
    context,
  };
  return response;
};
