import { MiddlewareConsumer, Module } from '@nestjs/common';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { LoggerModule } from 'nestjs-pino';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { AppConfigModule } from './config/config.module';
import { DatabaseProviderModule } from './database/database-provider.module';
import { GraphQLProviderModule } from './graphql/graphql.module';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    AuthModule,
    AppConfigModule,
    DatabaseProviderModule,
    GraphQLProviderModule,
    UserModule,
    EventEmitterModule.forRoot(),
    LoggerModule.forRoot({
      pinoHttp: {
        autoLogging: false,
        transport: {
          target: 'pino-pretty',
        },
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
