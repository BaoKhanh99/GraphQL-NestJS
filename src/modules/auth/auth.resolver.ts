import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';

import { User } from '../users/user.entity';
import { AuthService } from './auth.service';
import { AuthLoginInput } from './dtos/auth-login.input';
import { AuthTokenDto } from './dtos/auth-token.dto';
import { LocalAuthGuard } from './guards/local-auth.guard';

import { Public } from '@/common/decorators/public.decorator';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(LocalAuthGuard)
  @Mutation(() => AuthTokenDto)
  auth(
    @Context() { user }: { user: User },
    @Args('authLoginInput') _authLoginInput: AuthLoginInput,
  ): AuthTokenDto {
    return this.authService.login(user);
  }
}
