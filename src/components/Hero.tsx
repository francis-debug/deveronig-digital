import { useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Link } from "@tanstack/react-router";
import banner1 from "@/assets/banner-1.png";
import banner2 from "@/assets/banner-2.png";
import banner3 from "@/assets/banner-3.png";
import banner4 from "@/assets/banner-4.png";

type Slide = {
  image: string;
  cta: string;
  to: "/categories" | "/category/$slug";
  params?: Record<string, string>;
};

const SLIDES: Slide[] = [
  {
    image: banner1,
    cta: "Shop Now",
    to: "/category/$slug",
    params: { slug: "home-appliances" },
  },
  {
    image: banner2,
    cta: "Explore Deals",
    to: "/category/$slug",
    params: { slug: "accessories" },
  },
  {
    image: banner3,
    cta: "Shop Now",
    to: "/category/$slug",
    params: { slug: "kitchen-appliances" },
  },
  {
    image: banner4,
    cta: "Shop TVs",
    to: "/category/$slug",
    params: { slug: "tvs-entertainment" },
  },
];

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
    <section className="relative flex-1">
      <div className="overflow-hidden rounded-xl" ref={emblaRef}>
        <div className="flex">
          {SLIDES.map((s, i) => (
            <div key={i} className="relative min-w-0 flex-[0_0_100%]">
              <SlideCard slide={s} />
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5 sm:bottom-4 sm:gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => embla?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1.5 rounded-full transition-all sm:h-2 ${
              i === idx ? "w-6 bg-white sm:w-8" : "w-1.5 bg-white/60 sm:w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function SlideCard({ slide }: { slide: Slide }) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden sm:h-[400px] lg:h-[460px]">
      <img
        src={slide.image}
        alt="Promotional banner"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <Link
        to={slide.to as any}
        params={slide.params as any}
        className="absolute bottom-6 right-6 z-20 inline-flex items-center gap-2 rounded-full bg-[#F68B1E] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-[#e57e15] hover:scale-105 sm:bottom-8 sm:right-8 sm:px-8 sm:py-3.5 sm:text-base"
      >
        {slide.cta} →
      </Link>
    </div>
  );
}
