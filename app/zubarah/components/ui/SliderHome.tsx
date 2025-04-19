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
      buttonColor: "#c1fc0e",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
        "https://res.cloudinary.com/dmklduciw/image/upload/v1720086096/wall/wall1_tfetcp.jpg",
    },
    {
      id: 2,
      title: "",
      buttonTitle:'',
      buttonColor: "#f12c09",
      buttonTitleColor: "#f12c09",
      titleColor:'#fff',
      image:
        "https://res.cloudinary.com/dmklduciw/image/upload/v1691319695/WebSite%20Images/Alzubara%20image/911_u5kfqv.jpg",
    },
    {
      id: 3,
      title: "",
      buttonTitle:'',
      buttonColor: "#111",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
        "https://res.cloudinary.com/dmklduciw/image/upload/v1691319692/WebSite%20Images/Alzubara%20image/24896_lnxu6n.jpg",
    },
    {
    id: 4,
      title: "",
      buttonTitle:'',
      buttonColor: "#111",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
        "https://res.cloudinary.com/dmklduciw/image/upload/v1700594819/WebSite%20Images/Alzubara%20image/Archaelogical_site_of_Al_Zubarah_09_s40rrw.jpg",
    },
    {
      id: 5,
      title: "",
      buttonTitle:'',
      buttonColor: "#111",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
      
        "https://res.cloudinary.com/dmklduciw/image/upload/v1700576751/WebSite%20Images/Alzubara%20image/ZubaraFort_egnbds.jpg",
    },
    {
      id: 5,
      title: "",
      buttonTitle:'',
      buttonColor: "#111",
      buttonTitleColor: "#fff",
      titleColor:'#fff',
      image:
      
        "https://res.cloudinary.com/dmklduciw/image/upload/v1691319694/WebSite%20Images/Alzubara%20image/44879_mpzfnr.jpg",
    },
    
  ];
  return (
    <Carousel className="">
      <CarouselContent>
        {CAROUSEL.map((item: any) => (
        <CarouselItem key={item.id}>
            <div className="">
              <Card className="site-r-b">
                <CardContent className="">
                  <Link
                    href={"/"}
                    className=" "
                    style={{ backgroundColor: item.buttonColor,
                      color:item.buttonTitleColor,
                    }}
                  >{item.buttonTitle}</Link>
                  <span 
                >{item.title}</span>
                  <img src={item.image} alt={item.title} className="" />
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
