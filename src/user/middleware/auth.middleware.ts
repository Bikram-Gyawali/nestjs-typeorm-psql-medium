import { NestMiddleware } from '@nestjs/common';

export class AuthMiddleware implements NestMiddleware {
  async use(req, res, next) {
    console.log('auth middlewaree', req.headers);
    next();
  }
}
