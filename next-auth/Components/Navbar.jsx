import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  return (
    <div>
      <Link href="/api/auth/signin">
        <button
          onClick={(e) => {
            e.preventDefault();
            signIn("github");
          }}
        >
          Sign In
        </button>
      </Link>
      <Link href="/api/auth/signout">
        <button
          onClick={(e) => {
            e.preventDefault();
            signOut();
          }}
        >
          Sign Out
        </button>
      </Link>
      <Link href="/">Home</Link>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/blog">Blog</Link>
    </div>
  );
}
