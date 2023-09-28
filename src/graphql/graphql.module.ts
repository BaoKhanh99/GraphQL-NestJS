import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { FormattedExecutionResult, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

import {
  formatGraphqlError,
  formatResponse,
} from '@/common/utils/format-graphql.util';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: () => ({
        autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        context: ({ req, res }) => ({ req, res }),
        stringifyResult: (value: FormattedExecutionResult) =>
          formatResponse(value),
        formatError: (formatError: GraphQLFormattedError) =>
          formatGraphqlError(formatError),
      }),
    }),
  ],
})
export class GraphQLProviderModule {}
