import { NestFactory } from '@nestjs/core';
import { UserAuthModule } from './app/user-auth.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserAuthModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'user-auth-queue',
        queueOptions: { durable: false },
      },
    }
  );
  await app.listen();
}
bootstrap();
