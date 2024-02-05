import ArticleItem from "@/components/articles/ArticleItem";
import Pagination from "@/components/articles/Pagination";
import SearchArticleInput from "@/components/articles/SearchArticleInput";
import { Article } from '@/utils/types';
import type { Metadata } from 'next';

const ArticlesPage = async () => {

  // delay 3s
  //await new Promise((resolve) => setTimeout(resolve, 3000));

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  
  if(!response.ok) {
    throw new Error("Failed to fetch articles");
  }

  const articles: Article[] = await response.json();

  return (
    <section className="container m-auto px-5">
      <SearchArticleInput />
      <div className="flex items-center justify-center flex-wrap gap-7">
        {articles.slice(0, 6).map(item => (
          <ArticleItem article={item} key={item.id} />
        ))}
      </div>
      <Pagination />
    </section>
  )
}

export default ArticlesPage;

export const metadata: Metadata = {
  title: 'Articles Page',
  description: 'Articles about programming',
}