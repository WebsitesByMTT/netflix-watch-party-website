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
  title: " Diviértete con Netflix Party y crea recuerdos ",
  description:
    "Netflix Party es una extensión increíble que te permite ver tus programas favoritos con tus amigos y la mejor parte es que incluso puedes chatear, realizar llamadas de audio y video con ellos.",
  openGraph: {
    title: "  Diviértete con Netflix Party y crea recuerdos ",
    description:
      "Netflix Party es una extensión increíble que te permite ver tus programas favoritos con tus amigos y la mejor parte es que incluso puedes chatear, realizar llamadas de audio y video con ellos.",
    url: "https://www.netflixparty.net/spanish",
    type: "website",
    images: "https://www.netflixparty.net/main-logo.svg",
  },
  alternates: {
    canonical: "https://www.netflixparty.net/spanish",
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
