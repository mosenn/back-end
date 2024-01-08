import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger2 } from './middleware/log.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //* global middleware function logger2 for all controller and routes
  // app.use(Logger2);
  await app.listen(3000);
}
bootstrap();
