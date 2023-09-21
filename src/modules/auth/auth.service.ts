import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { User } from '../users/user.entity';
import { UserService } from '../users/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(userName: string, pass: string) {
    const user = await this.userService.findUserBy({ userName });

    if (user && user.password === pass) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  login(user: User) {
    const payload = { userName: user.userName, sub: user.id };

    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
