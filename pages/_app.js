import { GlobalStyle } from "@global/styles";
import Head from "next/head";
import Layout from "@components/Layout/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Strojni vez Pula</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
