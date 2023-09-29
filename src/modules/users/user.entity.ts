import { Column, Entity, OneToMany } from 'typeorm';

import { Address } from '../addresses/address.entity';

import { EntityConstant } from '@/common/constants/entity.constant';
import { BaseEntity } from '@/common/entities/base.entity';

@Entity('users')
export class User extends BaseEntity {
  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[];

  @Column({
    type: 'varchar',
    name: 'name',
    length: EntityConstant.mediumLength,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'user_name',
    length: EntityConstant.mediumLength,
    unique: true,
  })
  userName: string;

  @Column({
    type: 'varchar',
    name: 'password',
    length: EntityConstant.mediumLength,
  })
  password: string;
}
