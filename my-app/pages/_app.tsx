import "../styles/globals.css";
import "antd/dist/antd.css";
import LayOut from "../src/components/commons/layout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import { globalStyles } from "../styles/globalStyles";
import { Global } from "@emotion/react";
import ApolloSetting from "../src/commons/apollo";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta property="og:title" content={"MOONSMARKET!"} />
        <meta
          property="og:description"
          content={"새로운바람을 담은 리셀페이지"}
        />
      </Head>
      <RecoilRoot>
        <ApolloSetting>
          <Global styles={globalStyles} />
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </ApolloSetting>
      </RecoilRoot>
    </>
  );
}

export default MyApp;
