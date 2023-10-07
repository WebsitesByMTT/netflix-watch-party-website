import React from "react";
import Header from "./components/Header";
import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
import Join from "./components/Join";
import Work from "./components/Work";
import About from "./components/About";
import Accordian from "./components/Accordian";
import Footer from "./components/Footer";
import Comments from "./components/Comments";

export const metadata = {
  title: " Netflix Party ile eğlenin ve anılar yaratın ",
  description:
    "Netflix Party, en sevdiğiniz programları arkadaşlarınızla izlemenize olanak tanıyan muhteşem bir uzantıdır ve en iyi yanı, onlarla sohbet edebilmeniz, sesli ve görüntülü görüşme bile yapabilmenizdir.",
  openGraph: {
    title: "  Netflix Party ile eğlenin ve anılar yaratın ",
    description:
      "Netflix Party, en sevdiğiniz programları arkadaşlarınızla izlemenize olanak tanıyan muhteşem bir uzantıdır ve en iyi yanı, onlarla sohbet edebilmeniz, sesli ve görüntülü görüşme bile yapabilmenizdir.",
    url: "https://www.netflixparty.net/turkish",
    type: "website",
    images: "https://www.netflixparty.net/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.netflixparty.net/turkish",
  },
};

const page = () => {
  return (
    <html lang="tr">
      <head>
        <link
          rel="alternate"
          href="https://www.netflixparty.net/turkish"
          hrefLang="tr-tr"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/turkish"
          hrefLang="tr-bg"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/turkish"
          hrefLang="tr-gr"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/turkish"
          hrefLang="tr-sy"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/turkish"
          hrefLang="tr-iq"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/turkish"
          hrefLang="tr-uz"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/turkish"
          hrefLang="tr-cy"
        />
      </head>
      <body>
        <Header />
        <Benefits />
        <Favorite />
        <Work />
        <Comments />
        <About />
        <Accordian />
        <Footer />
      </body>
    </html>
  );
};

export default page;
