import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CARDLANDING from "./CARDLANDING";
import Autoplay from "embla-carousel-autoplay";

export function CarouselDemo({ cardData }) {
  return (
    <div className="relative w-full flex justify-center">
      <Carousel
        className="w-full max-w-xs"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="flex justify-center items-center">
          {cardData.map((item, index) => (
            <CarouselItem
              id="crItem"
              className="w-full flex justify-center"
              key={index}
            >
              <CARDLANDING {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="custom-arrow left-2 md:left-8" />
        <CarouselNext className="custom-arrow right-2 md:right-8" />
      </Carousel>
    </div>
  );
}
