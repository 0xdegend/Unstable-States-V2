import NavBar from "../components/NavBar/NavBar";
import HeroPage from "../components/HeroPage/HeroPage";
import Tokenomics from "../components/Tokenomics/Tokenomics";
import RoadMap from "../components/RoadMap/RoadMap";
import HowToBuy from "../components/HowToBuy/HowToBuy";
import Community from "../components/Community/Community";
import About from "../components/About/About";

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <NavBar />
      <HeroPage />
      <About />
      <Tokenomics />
      <RoadMap />
      <HowToBuy />
      <Community />
    </div>
  );
}
