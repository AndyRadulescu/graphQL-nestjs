import { Column, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import AuthorEntity from './author.entity';

@Entity('posts')
export default class PostsEntity {
  @PrimaryGeneratedColumn('uuid') id: string;

  @Index({ unique: true })
  @Column('text') content: string;
  @Column({ type: 'int', default: 0 }) likes: number;

  @ManyToOne(type => AuthorEntity, author => author.id)
  author: AuthorEntity;

  constructor(user: PostsEntity) {
    Object.assign(this, user);
  }
}
