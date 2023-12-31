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
  title: " Amusez-vous avec Netflix Party et créez des souvenirs ",
  description:
    " Netflix Party est une extension étonnante qui vous permet de regarder vos émissions préférées avec vos amis et la meilleure partie est que vous pouvez même discuter, passer des appels audio et vidéo avec eux.",
  openGraph: {
    title: "  Amusez-vous avec Netflix Party et créez des souvenirs ",
    description:
      " Netflix Party est une extension étonnante qui vous permet de regarder vos émissions préférées avec vos amis et la meilleure partie est que vous pouvez même discuter, passer des appels audio et vidéo avec eux.",
    url: "https://www.netflixparty.net/french",
    type: "website",
    images: "https://www.netflixparty.net/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.netflixparty.net/french",
  },
};

const page = () => {
  return (
    <html lang="fr">
      <head>
        <link
          rel="alternate"
          href="https://www.netflixparty.net/french"
          hrefLang="fr-fr"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/french"
          hrefLang="fr-be"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/french"
          hrefLang="fr-ca"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/french"
          hrefLang="fr-ch"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/french"
          hrefLang="fr-mc"
        />

        <link
          rel="alternate"
          href="https://www.netflixparty.net/french"
          hrefLang="fr-lu"
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
