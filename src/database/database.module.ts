import { HttpModule, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import AuthorEntity from './models/author.entity';
import PostsEntity from './models/posts.entity';
import { AuthorDbService } from './service/author-db.service';
import { PostsDbService } from './service/posts-db.service';

@Module({
  imports: [ TypeOrmModule.forFeature([ AuthorEntity, PostsEntity ]), HttpModule ],
  providers: [ AuthorDbService, PostsDbService ],
  exports: [ AuthorDbService, PostsDbService ],
})
export class DatabaseModule {
}
