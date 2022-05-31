import Link from "next/link";
import { useRouter } from "next/router";
function Home() {
  const router = useRouter();
  const handleClick = () => {
    // router.push("/product");
    router.replace("/product");
    //it replace the link it don't push the stack
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/profile"}>Profile</Link>
      <Link href={"/posts"}>Posts</Link>

      <Link href={"/product"}>
        <a>Products</a>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </div>
  );
}
export default Home;
// so there is no need to install react-router-dom in nextjs
// and its rouding based on pages file name so index.js is / and other is like /about /profile
