import { Hero } from "../components/hero";
import { Products } from "../components/products";
import AboutWhy from "../components/about-why";
import { WhyFits } from "../components/why-fits";
import Cylinder from "../components/cylinder";
import Layers from "../components/layers";
import BubbleSize from "../components/bubble-size";
import BuyNow from "../components/buy-now";
import HipDelivers from "../components/hip-delivers";
import Consultant from "../components/consultatant";
import Navbar from "../components/navbar";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div dir="rtl" className="font-fa bg-white">
      {/* <div id="container">
        <div id="square"></div>
        <div id="stretcher"></div>
      </div> */}
      <Navbar />
      <Hero />
      <Products />
      <AboutWhy />
      <WhyFits />
      <Cylinder />
      <Layers />
      <BubbleSize />
      <Divider />
      <Consultant />
      <HipDelivers />
      <Divider />
      <BuyNow />
      <Footer />
    </div>
  );
}

const Divider = () => <div className="w-1/2 border-l h-44 border-zinc-300" />;
