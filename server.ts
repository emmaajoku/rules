import { NestFactory } from '@nestjs/core';
import { AppModule } from 'app/app.module';
import * as helmet from 'helmet';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { ValidationPipe } from '@nestjs/common';
import { config } from 'app/config/config';

async function bootstrap() {

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({logger: true}),
  );

  const PORT: any = config.web.port;


  app.enableCors({
      origin: ['127.0.0.1', '*', '/\.flutterwave\.com$/']},
  );
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  app.listen(PORT, '0.0.0.0');

}
bootstrap();
