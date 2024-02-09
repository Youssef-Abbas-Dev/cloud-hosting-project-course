interface SearchArticlePageProps {
  searchParams: { searchText: string };
}

const SearchArticlePage = ({ searchParams }:SearchArticlePageProps) => {
  return (
    <section className="fix-height container m-auto px-5">
      <h1 className="text-2xl font-bold">
        Search Text is: {searchParams.searchText}
      </h1>
    </section>
  )
}

export default SearchArticlePage