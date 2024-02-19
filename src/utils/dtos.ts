export interface CreateArticleDto {
    title: string;
    description: string;
}

export interface UpdateArticleDto {
    title?: string;
    body?: string;
}