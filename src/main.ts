import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://korit-red-button-63s7.vercel.app',
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
