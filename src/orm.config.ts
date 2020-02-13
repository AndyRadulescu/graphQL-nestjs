import 'dotenv/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import AuthorEntity from './database/models/author.entity';
import PostsEntity from './database/models/posts.entity';

const dbUser: string = process.env.POSTGRES_USER;
const dbPassword: string = process.env.POSTGRES_PASSWORD;
const dbName: string = process.env.POSTGRES_DB;

// tslint:disable-next-line:radix
const dbPort: number = parseInt(process.env.DB_PORT);
const dbHost: string = process.env.DB_HOST;

export const ormconfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: dbHost,
  port: dbPort,
  username: dbUser,
  password: dbPassword,
  database: dbName,
  synchronize: true,
  logging: true,
  entities: [ AuthorEntity, PostsEntity ],
};
