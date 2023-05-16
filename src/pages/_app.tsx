import Layout from "components/Layout";
import { type AppType } from "next/dist/shared/lib/utils";

import "npm/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
