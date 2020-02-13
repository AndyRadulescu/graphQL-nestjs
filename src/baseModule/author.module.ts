import { Module } from '@nestjs/common';
import { AuthorResolver } from './author.resolver';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [ DatabaseModule ],
  providers: [ AuthorResolver ],
})
export class AuthorModule {
}
