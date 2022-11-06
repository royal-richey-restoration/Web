import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Source_Sans_Pro, EB_Garamond } from "@next/font/google";

import { Footer, Header } from "../components";

const inter = Inter({
  subsets: ["latin"],
});

const sourceSans = Source_Sans_Pro({
  weight: ["400", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

const ebGaramond = EB_Garamond({
  weight: ["400"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          --header-font: ${inter.style.fontFamily};
          --main-font: ${sourceSans.style.fontFamily};
          --logo: ${ebGaramond.style.fontFamily};
        }
      `}</style>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
