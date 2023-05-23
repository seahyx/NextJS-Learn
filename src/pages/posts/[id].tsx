import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { ParsedUrlQuery } from "querystring";

type Props = {
  postData: Post;
};

interface Params extends ParsedUrlQuery {
  id: string;
}

const Post: NextPage<Props> = ({ postData }) => {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className="flex min-h-screen w-full justify-center bg-gradient-to-t from-slate-700 to-indigo-500">
        <article className="container my-12 flex w-full flex-col items-center justify-center">
          <h1 className="brand-text text-4xl font-medium">{postData.title}</h1>
          <br />
          <div className="relative h-[300px] w-[600px]">
            <Image src="/apong.jpg" fill={true} alt="Apong" />
          </div>
          <br />
          <h2 className="text-2xl font-light text-slate-400">
            {postData.id} - {postData.date}
          </h2>
          <br />
          <div
            className="text-white"
            dangerouslySetInnerHTML={{ __html: postData.contentHTML }}
          />
          <br />
          <p className="text-2xl font-light text-white">
            <Link href="/">Go back Home.</Link>
          </p>
        </article>
      </div>
    </>
  );
};

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const ids: string[] = getAllPostIds();
  const paths = ids.map((id: string) => {
    return {
      params: {
        id: id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = await getPostData(params!.id);
  return {
    props: {
      postData,
    } as Props,
  };
};
