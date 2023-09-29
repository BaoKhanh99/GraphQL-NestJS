import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  UnprocessableEntityException,
} from '@nestjs/common';
import { GqlArgumentsHost } from '@nestjs/graphql';

@Catch(UnprocessableEntityException)
export class UnprocessableFilter
  implements ExceptionFilter<UnprocessableEntityException>
{
  catch(exception: UnprocessableEntityException, host: ArgumentsHost) {
    const gqlHost = GqlArgumentsHost.create(host);

    return exception;
  }
}
