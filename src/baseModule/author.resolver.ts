import { Args, Parent, Query, ResolveProperty, Resolver } from '@nestjs/graphql';
import { AuthorDbService } from '../database/service/author-db.service';
import { Logger } from '@nestjs/common';
import { PostsDbService } from '../database/service/posts-db.service';
import PostsEntity from '../database/models/posts.entity';

@Resolver('Author')
export class AuthorResolver {
  constructor(
    readonly authorService: AuthorDbService,
    readonly postsService: PostsDbService) {
  }

  @Query()
  public async author(@Args('id') id: string) {
    Logger.log(' author');
    return this.authorService.findById(id);
  }

  @ResolveProperty('posts')
  async getPosts(@Parent() author): Promise<PostsEntity[]> {
    return this.postsService.findAllByAuthor(author.id);
  }
}
