import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserDto)
  getUser(
    @Args({ name: 'id', type: () => ID })
    id: number,
  ): Promise<UserDto> {
    return this.userService.getUser(id);
  }

  @Mutation(() => UserDto)
  createUser(
    @Args('createUserDto')
    createUser: CreateUserDto,
  ): Promise<UserDto> {
    return this.userService.create(createUser);
  }
}
