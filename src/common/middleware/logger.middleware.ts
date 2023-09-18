import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { Logger } from 'nestjs-pino';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  constructor(private readonly logger: Logger) {}

  use(req: Request, res: Response, next: NextFunction) {
    if (
      req.method === 'POST' &&
      req.body.operationName !== 'IntrospectionQuery'
    ) {
      const regex = new RegExp(
        `(mutation|query) ${req.body.operationName}`,
        'g',
      );
      const slipt = req.body.query.split(regex);
      const message = `${slipt[1]} ${req.body.operationName}${
        slipt[2].split(/\n(mutation|query)/g)[0]
      }`;

      this.logger.log(message);
    }
    next();
  }
}
