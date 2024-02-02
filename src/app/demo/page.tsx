"use client"
import Link from "next/link";
import { useParams, useSearchParams } from 'next/navigation'
import { data } from './mock'
import { DataProps } from './type'

// type defaultProps = {
//     params : {id: string}
//     searchParams: {name: string}
// }

// interface defaultProps {
//     params : {id: string}
//     searchParams: {name: string}
// }

export default function Demo() {

  return (
    <div className="font-prompt font-semibold">
        <header className="border-solid border-b border-demo-violet">
            <div className="container box-border mx-auto w-full py-3">
                <h1 className="font-bold text-xl">
                    Demo Page
                </h1>
            </div>
        </header>
        <div className="container box-border mx-auto w-full font-semibold py-3">
            <div>
                <h2>Post</h2>
                <div>
                {data<DataProps>?.map((item, index) => (
                    <div className="mb-5 md:mb-2" key={`article-${index}`}>
                        {index + 1} {item.title}
                    </div>
                ))}
                </div>
            </div>
        </div>
    </div>
  );
}