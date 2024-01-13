import { getHandler, Handler } from '@nest-cdk/core';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
if (!process.env.LAMBDA_TASK_ROOT && !process.env.GENERATE) bootstrap();

export const handler: Handler = getHandler(NestFactory.create(AppModule));
global['handler'] = handler;
