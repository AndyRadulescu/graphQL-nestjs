import { Injectable } from '@nestjs/common';
import AuthorEntity from '../models/author.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorDbService {
  constructor(@InjectRepository(AuthorEntity) public readonly authorRepo: Repository<AuthorEntity>) {
  }

  public findById(id: string) {
    return this.authorRepo.findOne({ where: { id } });
  }

  public findByName(firstName: string) {
    return this.authorRepo.findOne({ where: { firstName } });
  }
}
