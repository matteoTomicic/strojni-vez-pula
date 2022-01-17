import Document, { Html, Head, Main, NextScript } from "next/document";
import images from "@constants/image.constants";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="hr">
                <Head>
                    <link rel="icon" type="image/jpg" href={images.logo.src} />
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700;800&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
