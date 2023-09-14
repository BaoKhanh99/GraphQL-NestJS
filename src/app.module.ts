import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppConfigModule } from './config/config.module';
import { DatabaseProviderModule } from './database/database-provider.module';
import { GraphQLProviderModule } from './graphql/graphql.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    AppConfigModule,
    DatabaseProviderModule,
    GraphQLProviderModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
