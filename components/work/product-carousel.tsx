"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/work/product-card";
import type { Product } from "@/content/portfolio";

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps"
  });
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const updateButtons = React.useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    updateButtons();
    emblaApi.on("select", updateButtons);
    emblaApi.on("reInit", updateButtons);

    return () => {
      emblaApi.off("select", updateButtons);
      emblaApi.off("reInit", updateButtons);
    };
  }, [emblaApi, updateButtons]);

  return (
    <div className="md:hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {products.map((product) => (
            <div className="min-w-0 flex-[0_0_88%] pl-4" key={product.slug}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-5 flex justify-end gap-2">
        <Button
          aria-label="Previous featured product"
          disabled={!canScrollPrev}
          onClick={() => emblaApi?.scrollPrev()}
          size="sm"
          type="button"
          variant="outline"
        >
          <ArrowLeft aria-hidden="true" />
        </Button>
        <Button
          aria-label="Next featured product"
          disabled={!canScrollNext}
          onClick={() => emblaApi?.scrollNext()}
          size="sm"
          type="button"
          variant="outline"
        >
          <ArrowRight aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
}
