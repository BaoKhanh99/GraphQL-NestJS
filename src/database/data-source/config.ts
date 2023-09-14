import { config } from 'dotenv';
import { DataSourceOptions } from 'typeorm';

import configuration from '@/config/configuration';

config();

const { database } = configuration();

export default {
  type: 'mysql',
  host: database.host,
  port: database.port,
  username: database.user,
  password: database.password,
  database: database.name,
  entities: ['dist/modules/**/*.entity.js'],
  migrations: ['dist/database/migrations/*.js'],
} as DataSourceOptions;
