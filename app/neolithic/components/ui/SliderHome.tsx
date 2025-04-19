import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";
import { Card, CardContent } from "./card";
import Link from "next/link";


const SliderHome = () => {
  const CAROUSEL = [
  
    {
      id: 1,
      title: "",
      buttonTitle:'',
      buttonColor: "#222",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
        "https://res.cloudinary.com/dmklduciw/image/upload/v1740681163/ages/NEOLITHIC6_otegga.jpg",
    },
    {
      id: 2,
      title: "",
      buttonTitle:'',
      buttonColor: "#111",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
        "https://res.cloudinary.com/dmklduciw/image/upload/v1740681169/ages/NEOLITHIC7_le2o2k.jpg",
    },
    {
    id: 3,
      title: "",
      buttonTitle:'',
      buttonColor: "#222",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
        "https://res.cloudinary.com/dmklduciw/image/upload/v1740681163/ages/NEOLITHIC9_qywsat.jpg",
    },
    {
      id: 4,
      title: "",
      buttonTitle:'',
      buttonColor: "#222",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
      
        "https://res.cloudinary.com/dmklduciw/image/upload/v1740681168/ages/NEOLITHIC02_vrau6u.jpg",
    },
    {
      id: 5,
      title: "",
      buttonTitle:'',
      buttonColor: "#222",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
      
        "https://res.cloudinary.com/dmklduciw/image/upload/v1740681169/ages/NEOLITHIC03_iuehcu.jpg",
    },
    {
      id: 6,
      title: "",
      buttonTitle:'',
      buttonColor: "#222",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
      
        "https://res.cloudinary.com/dmklduciw/image/upload/v1740681168/ages/NEOLITHIC02_vrau6u.jpg",
    },
  ];
  return (
    <Carousel className="w-full max-w-full relative max-h-[500px] h-[400px]">
      <CarouselContent>
        {CAROUSEL.map((item: any) => (
        <CarouselItem key={item.id}>
            <div className="p-1">
              <Card className="w-full h-[400px] border-0 rounded-xl">
                <CardContent className="flex items-start w-full h-full justify-start p-0 relative">
                  <Link
                    href={"/"}
                    className="absolute hover:opocity-90 transition-all text-sm buttom-8 left-[-50%] translate-x-[-50%] rounded-xl px-4 py-[4px]"
                    style={{ backgroundColor: item.buttonColor,
                      color:item.buttonTitleColor,
                    }}
                  >{item.buttonTitle}</Link>
                  <span className="absolute bottom-20 text-xl translate-x-[-50%] left-[-50%]"
                  style={{color:item.titleColor}}>{item.title}</span>
                  <img src={item.image} alt={item.title} className="h-full w-full rounded-xl  " />
                </CardContent>
              </Card>
            </div>
        </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext/>
      <CarouselPrevious/>
      
    </Carousel>
  );
};

export default SliderHome;
