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
  title: " Divertiti con Netflix Party e crea ricordi ",
  description:
    "Netflix Party è un'estensione straordinaria che ti consente di guardare i tuoi programmi preferiti con i tuoi amici e la parte migliore è che puoi persino chattare, effettuare audio e videochiamate con loro.",
  openGraph: {
    title: "  Divertiti con Netflix Party e crea ricordi ",
    description:
      "Netflix Party è un'estensione straordinaria che ti consente di guardare i tuoi programmi preferiti con i tuoi amici e la parte migliore è che puoi persino chattare, effettuare audio e videochiamate con loro.",
    url: "https://www.netflixparty.net/italian",
    type: "website",
    images: "https://www.netflixparty.net/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.netflixparty.net/italian",
  },
};

const page = () => {
  return (
    <>
      <Header />
      <Benefits />
      <Favorite />
      <Work />
      <Comments />
      <About />
      <Accordian />
      <Footer />
    </>
  );
};

export default page;
