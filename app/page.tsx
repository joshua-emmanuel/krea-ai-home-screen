import Header from "@/components/header";
import GenerateCardGrid from "@/components/generate-card-grid";
import { ChevronDown } from "lucide-react";

export default function Home() {
  return (
    <div className="lg:container px-6 md:px-10  mx-auto">
      <Header />
      <div className="my-40"></div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-medium text-xl">Generate</h2>
        <div className="flex gap-[0.1rem] items-center text-blue-600 text-xs font-medium">
          <ChevronDown className="w-4 h-4" />
          <p>Show All</p>
        </div>
      </div>
      <GenerateCardGrid />
      <div className="my-40"></div>
    </div>
  );
}
