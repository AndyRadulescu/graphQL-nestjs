import { Args, Query, Resolver } from '@nestjs/graphql';
import { AuthorDbService } from './database/service/author-db.service';
import { Logger } from '@nestjs/common';

@Resolver('Author')
export class AuthorResolver {
  constructor(readonly authorService: AuthorDbService) {
  }

  @Query()
  public async author(@Args('id') id: string) {
    Logger.log(' author');
    return this.authorService.findById(id);
  }
}
