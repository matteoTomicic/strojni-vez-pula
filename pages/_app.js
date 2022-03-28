import Script from "next/script";

import { GlobalStyle } from "@global/styles";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-4S2EWDDCS8" strategy="afterInteractive" />
			<Script id="google-analytics" strategy="afterInteractive">
				{`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    
                    gtag('config', 'G-4S2EWDDCS8');
                `}
			</Script>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
