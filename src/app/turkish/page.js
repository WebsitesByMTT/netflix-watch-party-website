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
