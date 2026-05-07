"use client";

import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";
import banner4 from "@/assets/banner-4.png";

const SLIDES = [banner1, banner2, banner3, banner4];

export function Hero() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSel = () => setIdx(embla.selectedScrollSnap());
    embla.on("select", onSel);
    onSel();
    const interval = setInterval(() => embla.scrollNext(), 5500);
    return () => {
      embla.off("select", onSel);
      clearInterval(interval);
    };
  }, [embla]);

  return (
    <section className="relative w-full h-full">
      <div className="h-full overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((src, i) => (
            <div key={i} className="relative h-full min-w-0 flex-[0_0_100%]">
              <img
                src={src}
                alt={`Banner ${i + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === idx ? "w-6 bg-white" : "w-1.5 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
