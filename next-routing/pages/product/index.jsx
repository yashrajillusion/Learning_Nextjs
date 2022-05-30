import Link from "next/link";

export default function ProductList() {
  return (
    <>
      <h1>Product1</h1>
      <h1>Product2</h1>
      <Link href="/product/3">
        <h1>Product3</h1>
      </Link>
      <Link href={"/product/100"} replace>
        Product 100
      </Link>
    </>
  );
}
//link replace return to home page if you back from there
