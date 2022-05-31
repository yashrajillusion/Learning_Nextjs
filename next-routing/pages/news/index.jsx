export default function NewsArticleList({ articles }) {
  return (
    <>
      <h1>List of News Articles</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id}
            {article.title}
            {article.category}
          </h2>
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/news");
  const data = await res.json();

  return {
    props: {
      articles: data,
    },
  };
}
