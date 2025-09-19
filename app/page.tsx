import Header from "@/components/header";
import GenerateCardGrid from "@/components/generate-card-grid";
import { ChevronDown } from "lucide-react";
import ImageCarousel from "@/components/image-carousel";
import { Button } from "@/components/ui/button";
import LegalIcon from "@/components/icons/legal-icon";
import PricingIcon from "@/components/icons/pricing-icon";

export default function Home() {
  return (
    <div className="xl:container px-6 md:px-8 mx-auto relative">
      <Header />

      <section className="lg:mr-[-28] mt-20 mb-16">
        <ImageCarousel />
      </section>

      <section className="mb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-medium text-xl">Generate</h2>
          <div className="flex gap-[0.1rem] items-center text-blue-600 text-xs font-medium">
            <ChevronDown className="w-4 h-4" />
            <p>Show All</p>
          </div>
        </div>
        <GenerateCardGrid />
      </section>

      <section className="mb-1">
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-xl">Gallery</h2>
          <div className="flex gap-[0.1rem] items-center text-blue-600 text-xs font-medium">
            <ChevronDown className="w-4 h-4" />
            <p>Show All</p>
          </div>
        </div>
      </section>

      <div className="absolute bottom-2 right-0 flex gap-2">
        <Button
          size="sm"
          className="flex items-center bg-muted text-neutral-700 dark:text-neutral-200 hover:bg-muted hover:text-neutral-700"
        >
          <LegalIcon />
          <span className="hidden md:block">Legal</span>
        </Button>
        <Button
          size="sm"
          className="flex items-center bg-muted text-neutral-700 dark:text-neutral-200 hover:bg-muted hover:text-neutral-700"
        >
          <PricingIcon />
          <span className="hidden md:block">Pricing</span>
        </Button>
      </div>
    </div>
  );
}
