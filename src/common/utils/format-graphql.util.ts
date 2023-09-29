import { FormattedExecutionResult, GraphQLFormattedError } from 'graphql';

import { errorCode } from '../constants/app.constant';

export function formatResponse(value: FormattedExecutionResult) {
  if (value.data?.['__schema']) {
    return JSON.stringify({ data: value.data });
  }

  if (value.errors) {
    return JSON.stringify({ errors: value.errors });
  }

  return JSON.stringify({
    data: Object.values(value.data)[0],
    // MD5 =))
    anyField: '6cc7f123dd3c150b91334cfc2f809361',
  });
}

export function formatGraphqlError(formatError: GraphQLFormattedError) {
  const graphqlErrorCode = !formatError.extensions.originalError
    ? errorCode[formatError.extensions.code as string]
    : formatError.extensions.originalError['statusCode'];

  return {
    message: formatError.message,
    statusCode: graphqlErrorCode,
  };
}
