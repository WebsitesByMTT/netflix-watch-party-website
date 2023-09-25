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
