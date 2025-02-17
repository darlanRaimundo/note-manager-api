import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: 'https://note-manager-front.vercel.app/',
      credentials: true,
      methods: 'GET,HEAD,OPTIONS,POST,PUT',
      allowedHeaders:
        'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers',
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
