import type { AppProps } from "next/app";
import Head from "next/head";
import '../styles/globals.css'
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Keymorph Landing Page</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
