import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const CarouselBanner: React.FC = () => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <div>
              <img
                className="round-lg"
                alt="Sự kiện 1"
                src="/src/assets/image/banner.png"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img
                className="round-lg"
                alt="Sự kiện 1"
                src="/src/assets/image/banner.png"
              />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div>
              <img
                className="round-lg"
                alt="Sự kiện 1"
                src="/src/assets/image/banner.png"
              />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </>
  );
};

export default CarouselBanner;
