
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export interface Author {
    id: string;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
}

export interface Post {
    id: string;
    content: string;
    title: string;
    likes?: number;
    author: Author;
}

export interface IQuery {
    author(id: string): Author | Promise<Author>;
}
