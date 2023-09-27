import { FormattedExecutionResult, GraphQLFormattedError } from 'graphql';

export function formatResponse(value: FormattedExecutionResult) {
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
  return {
    message: formatError.message,
    statusCode: formatError.extensions.status,
  };
}
