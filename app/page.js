import Image from "next/image";
import Hero from "./component/hero";
import Footer from "./component/footer";
import About from "./component/about";
import Buy from "./component/buy";
import Partner from "./component/partner";

export default function Home() {
  return (
    <div className="px-6 bg-slate-100">
      <Hero />
      <About />
      <Partner />
      <Buy /> <Footer />
    </div>
  );
}
