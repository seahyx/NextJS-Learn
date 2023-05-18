import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const FirstPost: NextPage = () => {
  return (
    <>
      <Head>
        <title>First Post!!</title>
      </Head>
      <div className="flex min-h-screen w-full flex-col items-center justify-center bg-slate-800">
        <h1 className="brand-text text-4xl font-medium">
          THIS IS firST POST!!!
        </h1>
        <div className="relative h-[300px] w-[600px]">
          <Image src="/apong.jpg" fill={true} alt="Apong" />
        </div>
        <h1 className="text-2xl font-light text-white">
          <Link href="/">Go back Home.</Link>
        </h1>
      </div>
    </>
  );
};

export default FirstPost;
