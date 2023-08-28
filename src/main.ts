import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { CustomLogger } from './common/custom/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useLogger(app.get(CustomLogger));

  await app.listen(3000);
}
bootstrap();
