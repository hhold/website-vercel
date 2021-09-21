import Head from "next/head";
import Image from "next/image";
import image from "../public/image.svg";

import { useWindupString } from "windups";

import { useState } from "react";
import Link from "next/link";

export default function Intro() {
  const [count, setCount] = useState(0);

  const text = ["Hello", "Welcome to my website!", "My name is Hitesh"];

  const [wtext] = useWindupString(text[count]);

  return (
    <div className="select-none">
      <Head>
        <title>Intro</title>
      </Head>
      <script
        dangerouslySetInnerHTML={{
          __html: `
         (function(c,l,a,r,i,t,y){
             c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
             t=l.createElement(r);
             t.async=1;
             t.src="https://www.clarity.ms/tag/"+i;
             y=l.getElementsByTagName(r)[0];
             y.parentNode.insertBefore(t,y);
         })(window, document, "clarity", "script", "8jp664y2yn");`,
        }}
      />
      ;
      <div className="top">
        <div className="pic relative fadeIn">
          <Image
            src={image}
            alt="Picture of the author"
            layout="fill"
            priority="true"
          />
        </div>
      </div>
      <div className="bottom flex flex-row justify-around items-stretch">
        <div className="back p-5 place-self-center">
          {count > 0 && (
            <button onClick={() => setCount(count - 1)}>
              {/* <p className="text-3xl">&#8592;</p> */}
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-100 text-3xl md:text-4xl font-poke text-center">
                B
              </div>
            </button>
          )}
          {count <= 0 && (
            <button disabled>
              {/* <p className="text-3xl">&#8592;</p> */}
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-100 text-3xl md:text-4xl font-poke text-center">
                B
              </div>
            </button>
          )}
        </div>

        <div className="textbox p-3 md:p-5 my-5 rounded-2xl font-poke text-4xl md:text-5xl">
          {wtext}
        </div>

        <div className="forward text-right p-5 place-self-center">
          {count < text.length - 1 && (
            <button onClick={() => setCount(count + 1)}>
              {console.log(count)}
              {/* <p className="text-3xl">&#8594;</p> */}
              <div className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-100 text-3xl md:text-4xl font-poke text-center">
                A
              </div>
            </button>
          )}
          {count == text.length - 1 && (
            <Link href="/">
              <a>
                <div className="rounded-full h-16 w-16 flex items-center justify-center bg-gray-100 text-3xl md:text-4xl font-poke text-center">
                  A
                </div>
              </a>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
