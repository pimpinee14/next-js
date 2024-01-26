'use client'

import Link from "next/link";

export default function SeverError() {
  return (
    <div className="global">
      <h2>SeverError</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}