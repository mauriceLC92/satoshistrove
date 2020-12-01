import Head from "next/head";
import "../styles/globals.css";
import "../styles/tailwind.css";

const GA_TRACKING_ID = "G-XRFCYKL3GW";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        ></script>
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', ${GA_TRACKING_ID});`,
          }}
        />
        <title>Satososhi's Trove</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
