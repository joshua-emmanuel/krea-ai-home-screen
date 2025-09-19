import Header from "@/components/header";
import GenerateCardGrid from "@/components/generate-card-grid";
import { ChevronDown } from "lucide-react";
import ImageCarousel from "@/components/image-carousel";

export default function Home() {
  return (
    <div className="xl:container px-6 md:px-8 mx-auto">
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

      <section>
        <div className="flex items-center justify-between">
          <h2 className="font-medium text-xl">Gallery</h2>
          <div className="flex gap-[0.1rem] items-center text-blue-600 text-xs font-medium">
            <ChevronDown className="w-4 h-4" />
            <p>Show All</p>
          </div>
        </div>
      </section>
    </div>
  );
}
