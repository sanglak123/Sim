import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card_Sim from "../card_sim";
import { interFade_Sim } from "@/sp/interfade";

interface Slide_Card {
  Bgr: string;
  Title: string;
  List_Card: interFade_Sim[];
}
const Slide_Card = ({ List_Card, Title, Bgr }: Slide_Card) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 1200,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 2000,
          autoplaySpeed: 2000,
          cssEase: "linear",
        },
      },
    ],
  };

  return (
    <section id="slide_card" className={`${Bgr} p-5`}>
      <div className="w-80">
        <div className="sim_header mb-4">
          <h4 className="txt_center txt_red">{Title}</h4>
        </div>

        <Slider {...settings}>
          {List_Card?.map((item, index) => {
            return (
              <div key={index} className="card_item">
                <Card_Sim sim={item} />
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
};

export default Slide_Card;
