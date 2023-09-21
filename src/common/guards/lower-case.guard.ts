import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class LowerCaseGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const args = context.getArgs();

    if (
      args[1].createUserDto.userName ===
      args[1].createUserDto.userName.toLowerCase()
    ) {
      return true;
    }

    return false;
  }
}
