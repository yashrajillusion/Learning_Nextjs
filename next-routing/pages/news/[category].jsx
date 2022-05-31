export default function ArticleCategory({ articles, category }) {
  return (
    <div>
      <h1>Showing news for {category}</h1>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>
            {article.id}
            {article.title}
            {article.category}
          </h2>
        </div>
      ))}
    </div>
  );
}
export async function getServerSideProps(context) {
  const { params, req, res, query } = context;
  res.setHeader("set-cookie", ["name=yashraj"]);
  const response = await fetch(
    `http://localhost:5000/news?category=${params.category}`
  );
  const data = await response.json();
  return {
    props: {
      articles: data,
      category: params.category,
    },
  };
}
