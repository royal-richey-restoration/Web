import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          name="description"
          content="We pride ourselves as a full service hardwood flooring Restoration company that is proficient in all aspects of wood flooring renewal. Contact us today for the solution to all your flooring issues and needs."
        />
        <meta name="og:site_name" content="Royal Richey Restoration" />
        <meta name="og:title" content="Royal Richey Restoration" />
        <meta name="og:image" content="/images/logo.png" />
        <meta
          property="og:description"
          content="Hardwood Floor Repair and Restoration by the professionals in hardwood flooring: Royal Hardwood Floors. Call: 727-267-2617"
        />
        <link rel="icon" href="/logo-32x32.png" sizes="32x32" />
        <link rel="icon" href="/logo-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="logo-backgroundless.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
