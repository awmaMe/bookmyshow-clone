import Slider from "react-slick";

// arrow components
import { PrevArrow, NextArrow } from "./Arrows.components";

const HeroCarousel = () => {
  const settingsLG = {
    arrow: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    centerMode: true,
    centerPadding: "300px",
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const images = [
    "https://images.unsplash.com/photo-1566813916511-2701d4c96576?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1614792403436-ba5b3e747604?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1618453339685-41b3df3d1996?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1632743050362-0c61a1ad2462?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80",
  ];
  return (
    <>
      <div className="lg:hidden ">
        <Slider {...settings}>
          {images.map((image) => (
            <div className="w-full h-60 md:h-80 pb-3">
              <img src={image} alt="testing" className="w-full h-full" />
            </div>
          ))}
        </Slider>
      </div>
      <div className="hidden lg:block">
        <Slider {...settingsLG}>
          {images.map((image) => (
            <div className="w-full h-96 px-2 py-3">
              <img
                src={image}
                alt="testing"
                className="w-full h-full rounded-md"
              ></img>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default HeroCarousel;
