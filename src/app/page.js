import Benefits from "./components/Benefits";
import Favorite from "./components/Favorite";
import Work from "./components/Work";
import Join from "./components/Join";
import About from "./components/About";
import Accordian from "./components/Accordian";

export default function Home() {
  return (
    <>
      <Benefits />
      <Favorite/>
      <Join/>
      <Work/>
      <About/>
      <Accordian/>
    </>
  );
}
