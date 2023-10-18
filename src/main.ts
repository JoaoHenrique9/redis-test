import { NestFactory } from '@nestjs/core';
import { RedisModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(RedisModule);
  await app.listen(3000);
}
bootstrap();
