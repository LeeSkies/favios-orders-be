import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';
import { GlobalExceptionFilter } from './GlobalExceptionFilter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new GlobalExceptionFilter());
  app.enableCors({origin: ["http://localhost:5173", "https://favios-orders-be.vercel.app"]})
  await app.listen(3000);
}
bootstrap();
