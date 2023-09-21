import { FieldMiddleware, MiddlewareContext, NextFn } from '@nestjs/graphql';

export const UpperCaseFirstMiddleware: FieldMiddleware = async (
  ctx: MiddlewareContext,
  next: NextFn,
) => {
  const value = await next();

  return `${value[0].toUpperCase()}${value.slice(1)}`;
};
