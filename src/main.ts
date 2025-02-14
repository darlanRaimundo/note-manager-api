import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      allowedHeaders: ['Content-Type', 'Accept', 'Authorization'],
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap()
  .then(() => {
    console.log(`Servidor rodando na porta ${process.env.PORT ?? 3000}`);
  })
  .catch((err) => {
    console.log(err);
  });
