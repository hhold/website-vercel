import Head from "next/head";
import { useState } from "react";
import Typical from 'react-typical'


export default function Intro() {
  return (
    <div className="h-screen">
      <Head>
        <title>Intro</title>
      </Head>

      <div className="top">top</div>

      <div className="bottom">
        <div className="flex flex-row justify-around items-stretch">
          <div className="back p-5 place-self-center">{"<"}</div>

          <div className="textbox p-7 my-5 rounded-2xl font-poke text-5xl">
          <Typical
        steps={['Hello there! Welcome to the world of Pokémon!']}
      />
          </div>

          <div className="forward text-right p-5 place-self-center">{">"}</div>
        </div>
      </div>
    </div>
  );
}
