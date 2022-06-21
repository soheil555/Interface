import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="light-mode">
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>Axoswap</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}