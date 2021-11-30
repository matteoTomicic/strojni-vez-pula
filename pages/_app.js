import { GlobalStyle } from "../src/styles";
import Head from "next/head";
import Layout from "../src/components/Layout/Layout";
import images from "../src/constants/image.constants";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <Head>
                <title>Strojni vez Pula</title>
                <link rel="icon" type="image/jpg" href={images.logo.src} />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap" rel="stylesheet" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
