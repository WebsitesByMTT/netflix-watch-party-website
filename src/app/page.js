import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
import Work from "./components/Work";
import Join from "./components/Join";
import About from "./components/About";
import Accordian from "./components/Accordian";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Benefits />
      <Favorite />
      <Join />
      <Work />
      <About />
      <Accordian />
      <Footer />
    </>
  );
}
