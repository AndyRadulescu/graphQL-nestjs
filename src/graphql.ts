
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
    title: string;
    likes?: number;
}

export interface IQuery {
    author(id: string): Author | Promise<Author>;
}
