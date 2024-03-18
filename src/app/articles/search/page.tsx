import { getArticlesBasedOnSearch } from '@/apiCalls/articleApiCall';
import { Article } from '@prisma/client';
import ArticleItem from '@/components/articles/ArticleItem';

interface SearchArticlePageProps {
  searchParams: { searchText: string };
}

const SearchArticlePage = async ({ searchParams: { searchText } }: SearchArticlePageProps) => {
  const articles: Article[] = await getArticlesBasedOnSearch(searchText);

  return (
    <section className="fix-height container m-auto px-5">
      {articles.length === 0 ? (
        <h2 className='text-gray-800 text-2xl font-bold p-5'>
          Articles based on
          <span className='text-red-500 mx-1'>{searchText}</span>
          not found
        </h2>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-2 mt-7 text-gray-800">
            Articles based on
            <span className='ms-1 text-green-700 text-3xl font-bold'>{searchText}</span>
          </h1>
          <div className='flex items-center justify-center flex-wrap gap-7'>
            {articles.map(item => (
              <ArticleItem key={item.id} article={item} />
            ))}
          </div>
        </>
      )}
    </section>
  )
}

export default SearchArticlePage