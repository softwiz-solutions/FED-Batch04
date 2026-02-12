"use client"

import Header from "@/components/Header";
import Likes from "@/components/Likes";

export default function Home() {
  const names = ["Ada Lovelace", "Grace Hopper", "Margaret Hamilton","ali"];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Header title="Hello World" abc="text-2xl text-blue-500" />
      <Header
        title="Welcome to Next.js Project"
        abc="text-2xl text-green-500"
      />
      <Header abc="text-2xl text-red-500" />
      <ul>
        {/* <li>{names[0]}</li>
        <li>{names[1]}</li>
        <li>{names[2]}</li> */}

        {names.map(function (item, index) {
          return <li key={index} >{item}</li>;
        })}
      </ul>
      <Likes/>
      {/* <Header /> */}
    </div>
  );
}
