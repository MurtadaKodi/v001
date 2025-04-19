import Footer from "../../components/footer/footer";
import MyHeader from "../../components/header/header";
import SliderHome from "./components/ui/SliderHome";

import "./all-sites.css";
import Hero from "../../components/hero/hero";
import Zubara from "./zubara";

const Page = () => {
  return (
    <main className="main">
      <MyHeader />

      <Hero />

      <Zubara />

      <div className="site-footer">
        <Footer />
      </div>
    </main>
  );
};

export default Page;
