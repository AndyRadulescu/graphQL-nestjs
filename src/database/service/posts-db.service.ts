import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import PostsEntity from '../models/posts.entity';
import { Author } from '../../graphql';

@Injectable()
export class PostsDbService {
  constructor(@InjectRepository(PostsEntity) public readonly postsRepo: Repository<PostsEntity>) {
  }

  public async findAllByAuthor(id: Author): Promise<PostsEntity[]> {
    return await this.postsRepo.find({ relations: [ 'author' ], where: { author: { id } } });
  }
}
