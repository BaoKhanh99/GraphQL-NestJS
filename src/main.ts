import { NestFactory } from '@nestjs/core';
import { Logger } from 'nestjs-pino';

import { AppModule } from './app.module';
import { LowerCaseGuard } from './common/guards/lower-case.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });

  app.useLogger(app.get(Logger));
  app.useGlobalGuards(new LowerCaseGuard());

  await app.listen(3000);
}
bootstrap();
