import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { ormconfig } from './orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthorModule } from './baseModule/author.module';

const debugMode = process.env.ENV === 'development';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    AuthorModule,
    GraphQLModule.forRoot({
      typePaths: [ './**/*.graphql' ],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      debug: debugMode,
      playground: debugMode,
    }) ],
  controllers: [ AppController ],
  providers: [ AppService ],
})

export class AppModule {
}
