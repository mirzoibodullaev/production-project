import { User } from "entities/User";

export enum ArticleSortField {
    VIEWS = "views",
    TITLE = "title",
    CREATED = "createdAt"
}

export enum ArticleBlockType {
    CODE = "CODE",
    IMAGE = "IMAGE",
    TEXT = "TEXT",
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title: string;
}

export type ArticleBlock =
    | ArticleCodeBlock
    | ArticleImageBlock
    | ArticleTextBlock;

export enum ArticleType {
    ALL = "ALL",
    IT = "IT",
    BACKEND = "Backend",
    FRONTEND = "Frontend",
    PROGRAMMING = "Programming"
}

export enum ArticleView {
    LIST = "LIST",
    GRID = "GRID",
}

export interface Article {
    user: User;
    id: string;
    title: string;
    subtitle: string;
    views: number;
    img: string;
    createdAt: string;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
