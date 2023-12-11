import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // remueve propiedades de los post que no estan validadas
      forbidNonWhitelisted: true, // Esto muestra cuales propiedades no deberian existir
    }),
  );

  await app.listen(3000);
}
bootstrap();
