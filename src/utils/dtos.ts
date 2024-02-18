export interface CreateArticleDto {
    title: string;
    body: string;
}

export interface UpdateArticleDto {
    title?: string;
    body?: string;
}