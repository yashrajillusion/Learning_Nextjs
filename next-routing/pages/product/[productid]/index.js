import { useRouter } from "next/router";
export default function ProductDetails() {
  const router = useRouter();
  const productid = router.query.productid;
  return <h1>Detials about product {productid}</h1>;
}
