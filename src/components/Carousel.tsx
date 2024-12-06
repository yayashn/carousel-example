import React, { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ children, className, active = true }) {
  const [emblaRef, api] = useEmblaCarousel({ active });
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    api?.on("scroll", () => setProgress(api.scrollProgress()));

    return () => {
      api?.destroy();
    };
  }, [api]);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="overflow-hidden w-full" ref={emblaRef}>
        <div className="flex gap-2 lg:gap-5">{children}</div>
      </div>
      <progress className="h-1 w-30 mt-14" value={progress} />
    </div>
  );
}

export const CarouselItem = ({ src, href, children }) => {
  return (
    <a
      href={href}
      className="flex flex-col gap-2 items-center min-w-0 flex-[0_0_170px]"
    >
      <img className="object-cover" src={src} />
      <span className="uppercase">{children}</span>
    </a>
  );
};
