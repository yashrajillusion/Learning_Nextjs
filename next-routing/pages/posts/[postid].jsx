export default function Post({ post }) {
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <p>{post.body}</p>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
  const data = await res.json();
  const paths = data.map((post) => ({
    params: {
      postid: `${post.id}`,
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + params.postid
  );
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
