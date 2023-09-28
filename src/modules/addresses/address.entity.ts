import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { User } from '../users/user.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';

@Entity('addresses')
export class Address extends BaseEntity {
  @ManyToOne(() => User, (user: User) => user.addresses)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @Column({
    type: 'varchar',
    name: 'country',
    length: EntityConstant.mediumLength,
  })
  country: string;

  @Column({
    type: 'varchar',
    name: 'province',
    length: EntityConstant.mediumLength,
  })
  province: string;

  @Column({
    type: 'varchar',
    name: 'district',
    length: EntityConstant.mediumLength,
  })
  district: string;

  @Column({
    type: 'int',
    name: 'user_id',
  })
  userId: number;
}
