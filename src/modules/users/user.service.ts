import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { Repository } from 'typeorm';

import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async getUser(id: number): Promise<UserDto> {
    const user = await this.repository.findOneBy({ id });

    return plainToInstance(UserDto, user);
  }

  async create(input: CreateUserDto): Promise<UserDto> {
    const user = await this.repository.save(input);

    return plainToInstance(UserDto, user);
  }

  async delete(id: number): Promise<boolean> {
    await this.repository.delete(id);

    return true;
  }
}
