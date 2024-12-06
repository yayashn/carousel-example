import Carousel, { CarouselItem } from "./components/Carousel";

export default function ShopNow() {
  return (
    <div className="flex flex-col items-center my-20 gap-10 lg:flex-row p-5">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start">
        <span className="text-xl tracking-widest w-full">WHAT'S NEW TODAY</span>
        <span className="text-7xl my-6 font-mono lg:w-full">634</span>
        <span className="mb-8 text-nowrap">
          Discover what just landed at MR PORTER
        </span>
        <a className="hidden lg:block cursor-pointer bg-black text-white px-5 py-3 w-70 text-center text-sm font-light hover:opacity-60 transition-opacity">
          Shop now
        </a>
      </div>

      <Carousel className="lg:[&_progress]:hidden">
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Versace
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          The Row
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Versace
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Givenchy
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Versace
        </CarouselItem>{" "}
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Versace
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          The Row
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Versace
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Givenchy
        </CarouselItem>
        <CarouselItem
          href=""
          src="https://www.mrporter.com/variants/images/1647597352345806/in/w300_a3-4_ccrop.jpg"
        >
          Versace
        </CarouselItem>
      </Carousel>

      <a className="lg:hidden cursor-pointer bg-black text-white px-5 py-3 w-70 text-center text-sm font-light hover:opacity-60 transition-opacity">
        Shop now
      </a>
    </div>
  );
}
