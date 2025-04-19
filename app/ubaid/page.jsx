import * as React from "react";
import Image from "next/image";
import "../bronze/bronze.css";
import Deails from "./deails";
import MyHeader from '../../components/header/header'


import SliderHome from "./components/ui/SliderHome";

export default function CarouselDemo() {
  return (
    <main className="main">
      <MyHeader/>
    
      <section className="slider">
  

        <div className="w-[60%] h-[100%] max-md:w-full">
          <SliderHome />
        </div>
      </section>
      <div className="details">
        <Deails />
      </div>
    </main>
  );
}
