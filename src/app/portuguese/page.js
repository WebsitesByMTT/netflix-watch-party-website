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
  title: " Divirta-se com Netflix Party e crie memórias ",
  description:
    "Netflix Party é uma extensão incrível que permite que você assista seus programas favoritos com seus amigos e a melhor parte é que você pode até conversar, fazer chamadas de áudio e vídeo com eles.",
  openGraph: {
    title: "  Divirta-se com Netflix Party e crie memórias ",
    description:
      "Netflix Party é uma extensão incrível que permite que você assista seus programas favoritos com seus amigos e a melhor parte é que você pode até conversar, fazer chamadas de áudio e vídeo com eles.",
    url: "https://www.netflixparty.net/portuguese",
    type: "website",
    images: "https://www.netflixparty.net/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.netflixparty.net/portuguese",
  },
};

const page = () => {
  return (
    <html lang="pt">
      <head>
        <link
          rel="alternate"
          href="https://www.netflixparty.net/portuguese"
          hreflang="pt-pt"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/portuguese"
          hreflang="pt-ao"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/portuguese"
          hreflang="pt-br"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/portuguese"
          hreflang="pt-mo"
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
