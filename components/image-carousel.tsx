"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

const carouselData = [
  {
    bgImage: "/images/wan2.2.webp",
    title: "WAN 2.2 Image generation",
    description:
      "Generate complex images with the brand new and powerfulWAN 2.2 model. Exceptional prompt adherence and ultra-realistic textures.",
    badge: "NEW IMAGE MODEL",
  },
  {
    bgImage: "/images/open-source.webp",
    title: "FLUX X.1 Krea",
    description:
      "We're making the weights to our FLUX.1 Krea model open-source. Download and run our model weights, read the technical report, or generate with it in Krea Image.",
    badge: "OPEN SOURCE MODEL",
  },
  {
    bgImage: "/images/open-poster.webp",
    title: "Krea 1 - Open Beta Access",
    description:
      "Free access to our new frontier AI image generator. Enjoy unparalleled photorealism, multi-language prompting, and ultra high resolutions.",
    badge: "KREA 1 -OPEN BETA ACCESS",
  },
  {
    bgImage: "/images/motion-transfer-poster.webp",
    title: "Introducing Motion Transfer",
    description:
      "Bring motion into your characters. Upload any image, record a video of yourself, and make your characters smile, talk, and dance. Powered by Runway Act 2.",
    badge: "NEW TOOL",
  },
  {
    bgImage: "/images/edit-kontext-poster.webp",
    title: "Edit with Kontext",
    description:
      "Editing images has never been easier. Try FLUX.1 Kontext to change generations and photos.",
    badge: "NEW TOOL",
  },
  {
    bgImage: "/images/lip-sync-announcement.webp",
    title: "Announcing Lip-syncing",
    description:
      "Make your characters talk - upload a face, generate or record voices, and bring life into your generations. Powerful lip-syncing with Hedra. ",
    badge: "NEW FEATURE",
  },
  {
    bgImage: "/images/lion-poster.webp",
    title: "New Enhance Models",
    description:
      "Try out Krea's new powerful generative enhancer, upscale to 22K resolution with Topaz, or save credits with super fast models.",
    badge: "NEW MODEL",
  },
  {
    bgImage: "/images/open-poster.webp",
    title: "Krea 1 - Open Beta Access",
    description:
      "Free access to our new frontier AI image generator. Enjoy unparalleled photorealism, multi-language prompting, and ultra high resolutions.",
    badge: "KREA 1 -OPEN BETA ACCESS",
  },
  {
    bgImage: "/images/lip-sync-announcement.webp",
    title: "Announcing Lip-syncing",
    description:
      "Make your characters talk - upload a face, generate or record voices, and bring life into your generations. Powerful lip-syncing with Hedra. ",
    badge: "NEW FEATURE",
  },
];

export default function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-10">
          {carouselData.map((data, index) => (
            <CarouselItem key={index} className="lg:basis-[60%] pl-10">
              <Card
                className="relative bg-cover bg-center bg-no-repeat aspect-square md:aspect-[6/3.3] flex flex-col justify-end text-white shadow-none rounded-3xl pb-8 md:px-2"
                style={{ backgroundImage: `url('${data.bgImage}')` }}
              >
                <div
                  className="absolute inset-0 dark:h-[102%] dark:-top-1 rounded-3xl"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 50%, rgba(0,0,0,0.5) 100%)",
                  }}
                ></div>

                <p className="absolute text-[0.6rem] top-0 p-5 pt-8 text-white/80 tracking-wide">
                  {data.badge}
                </p>

                <CardContent className="relative z-10 flex flex-col gap-3 md:gap-0 md:flex-row md:justify-between md:items-end">
                  <div className="max-w-[32ch]">
                    <h2 className="md:text-2xl">{data.title}</h2>
                    <p className="mt-2 text-xs text-neutral-300 leading-4 tracking-wide">
                      {data.description}
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-white text-black hover:bg-white hover:text-dark rounded-4xl max-w-[fit-content]"
                  >
                    Try WAN 2.2
                  </Button>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute -bottom-10 flex items-center justify-center lg:justify-end space-x-2 w-full lg:w-[95%]">
          <CarouselPrevious className="relative translate-none top-0 left-0 bg-muted shadow-none border-none hover:shadow-sm" />
          <CarouselNext className="relative translate-none top-0 right-0 bg-muted shadow-none border-none hover:shadow-sm" />
        </div>
      </Carousel>

      <div className="flex items-center justify-center gap-2 mt-14 lg:mt-5">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-2 w-2 rounded-full",
              "bg-neutral-200 dark:bg-neutral-800",
              {
                "bg-black dark:bg-white": index + 1 === current,
              }
            )}
          />
        ))}
      </div>
    </div>
  );
}
