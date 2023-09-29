import { ApolloServerErrorCode } from '@apollo/server/errors';

export const IS_PUBLIC_KEY = 'isPublic';

export const errorCode = {
  [ApolloServerErrorCode.GRAPHQL_VALIDATION_FAILED]: 422,
};
