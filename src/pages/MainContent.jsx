import Hero from "./Hero";
import Events from "./Events";
import Location from "./Location";
import Gifts from "./Gifts";
import Gallery from "./Gallery";   // 👈 new
import Wishes from "./Wishes";
import BottomBar from "../components/BottomBar";

export default function MainContent() {
  return (
    <div className="pb-20">
      <Hero />
      <Events />
      <Location />
      <Gifts />
      <Gallery />   {/* 👈 tambahan */}
      <Wishes />
      <BottomBar />
    </div>
  );
}
