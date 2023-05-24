import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta
          name="description"
          content="This is an APP made by Seah Ying Xiang"
        />
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#6d0247] to-[#29152c]">
        <div className="container flex h-fit min-h-screen flex-col items-center justify-center">
          <div className="flex h-screen flex-col place-content-center">
            <h1 className="brand-text h-auto pb-4 text-6xl font-light text-transparent">
              <span className="font-extrabold">APP</span> by seahyx.
            </h1>
            <section className="font-light text-slate-100">
              <h2 className="text-3xl font-bold">Blog</h2>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {},
  };
}
