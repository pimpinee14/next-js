"use client"
import Link from "next/link";
import { useParams, useSearchParams } from 'next/navigation'

// type defaultProps = {
//     params : {id: string}
//     searchParams: {name: string}
// }

interface defaultProps {
    params : {id: string}
    searchParams: {name: string}
}

export default function Page(data:defaultProps) {
//   const params = useParams<{ tag: string; item: string }>()
//   const query = useSearchParams()
  console.log('data',data)
  return (
    <div className="global">
      {data.params.id}
      {data.searchParams.name}
    
      <Link href="/">Return Home</Link>
    </div>
  );
}