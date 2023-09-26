import { EventEmitter2 } from '@nestjs/event-emitter';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { MailNotificationService } from '../mail/mail-notification.service';
import { PROVIDERS } from '../notification/notification.provider';
import { SlackNotificationService } from '../slack/slack-notification.service';
import { CreateUserDto } from './dtos/create-user.dto';
import { UserDto } from './dtos/user.dto';
import { UserService } from './user.service';

import { EventConstant } from '@/common/constants/event.constant';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService,
    private eventEmitter: EventEmitter2,
  ) {}

  @Query(() => UserDto)
  async get(
    @Args({ name: 'id', type: () => ID })
    id: number,
  ): Promise<UserDto> {
    return this.userService.getUser(id);
  }

  @Mutation(() => UserDto)
  async create(
    @Args('createUserDto')
    createUser: CreateUserDto,
  ): Promise<UserDto> {
    const user = await this.userService.create(createUser);

    this.eventEmitter.emit(EventConstant.notification, {
      provider: PROVIDERS.MAIL,
      service: new MailNotificationService(),
      data: { id: 1 },
    });

    return user;
  }

  @Mutation(() => Boolean)
  async delete(
    @Args('id')
    id: number,
  ): Promise<boolean> {
    const status = await this.userService.delete(id);

    this.eventEmitter.emit(EventConstant.notification, {
      provider: PROVIDERS.SLACK,
      service: new SlackNotificationService(),
      data: { id: 1 },
    });

    return status;
  }
}
