import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';

import configuration from './configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: Joi.object({
        APP_ENV: Joi.string().valid('dev', 'prod', 'test'),
        APP_PORT: Joi.number(),
        TZ: Joi.string(),
        DB_HOST: Joi.string(),
        DB_PORT: Joi.number(),
        DB_NAME: Joi.string(),
        DB_USER: Joi.string(),
        DB_PASSWORD: Joi.string(),
      }),
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class AppConfigModule {}
