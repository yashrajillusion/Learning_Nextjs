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
    /*
      paths:[
          {
              params: {postId: '1'},
          }
          {
              params: {postId: '2'}
          }
      ]
      */
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
    revalidate: 10,
  };
}
//revalidate rebuild the page after every 10sec if it fetch
