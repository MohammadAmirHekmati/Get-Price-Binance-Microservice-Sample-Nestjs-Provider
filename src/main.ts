import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceOptions } from './microservice.configuartion';
import { Logger } from '@nestjs/common';
const logger=new Logger()
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule,microserviceOptions);
  await app.listen().then(()=>
  {
    logger.log('Provider listening...')
  })
}
bootstrap();
