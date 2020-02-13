import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import PostsEntity from './posts.entity';

@Entity('author')
export default class AuthorEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Column('text') firstName: string;
  @Column('text') lastName: string;

  @OneToMany(type => PostsEntity, post => post.id)
  posts: PostsEntity[];

  constructor(user: AuthorEntity) {
    Object.assign(this, user);
  }
}
