import circleIcon from "@/public/images/circle-icon.png";
import { ChevronDown, Image as LucideImage, Headset, Bell } from "lucide-react";

import Image from "next/image";
import { Button } from "./ui/button";
import { ThemeToggle } from "./theme-toggle";
import Logo from "./logo";
import EditIcon from "./icons/edit-icon";
import HomeIcon from "./icons/home-icon";
import ImageIcon from "./icons/image-icon";
import VideoIcon from "./icons/video-icon";
import EnhancerIcon from "./icons/enhancer-icon";
import RealtimeIcon from "./icons/realtime-icon";
import AssetsIcon from "./icons/assets-icon";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex gap-6">
        <Logo />
        <div className="hidden xl:flex gap-2 items-center">
          <Image src={circleIcon} alt="Krea Logo" width="25" />
          <div className="text-muted-foreground flex gap-2 items-center">
            <p>benevolentnimblebat</p>
            <ChevronDown size="15" />
          </div>
        </div>
      </div>

      <div className="hidden md:flex gap-1 items-center bg-muted rounded-lg p-[0.375rem]">
        <Button
          size="icon"
          className="bg-white hover:bg-white text-black dark:bg-black dark:text-white w-13 h-10 rounded-xl"
        >
          <HomeIcon />
        </Button>
        <Button
          size="icon"
          className="bg-transparent text-primary shadow-none hover:bg-transparent w-13 h-10 rounded-xl"
        >
          <ImageIcon />
        </Button>
        <Button
          size="icon"
          className="text-primary shadow-none w-13 h-10 rounded-xl bg-transparent hover:bg-transparent"
        >
          <VideoIcon />
        </Button>
        <Button
          size="icon"
          className="text-primary bg-transparent shadow-none hover:bg-transparent w-13 h-10 rounded-xl"
        >
          <EnhancerIcon />
        </Button>
        <Button
          size="icon"
          className="text-primary bg-transparent shadow-none hover:bg-transparent w-13 h-10 rounded-xl"
        >
          <RealtimeIcon />
        </Button>
        <Button
          size="icon"
          className="bg-transparent text-primary shadow-none hover:bg-transparent w-13 h-10 rounded-xl"
        >
          <EditIcon />
        </Button>
        <Button
          size="icon"
          className="text-primary bg-transparent shadow-none hover:bg-transparent w-13 h-10 rounded-xl"
        >
          <AssetsIcon />
        </Button>
      </div>

      <div className="flex gap-2">
        <Button className="hidden xl:flex rounded-lg bg-muted hover:bg-primary hover:text-secondary text-primary">
          <LucideImage />
          <span>Gallery</span>
        </Button>
        <Button className="hidden xl:flex rounded-lg bg-muted hover:bg-primary hover:text-secondary text-primary">
          <Headset />
          <span>Support</span>
        </Button>
        <Button className="rounded-lg bg-muted hover:bg-primary hover:text-secondary text-primary">
          <Bell />
        </Button>
        <ThemeToggle />
        <Button className="flex items-center justify-center bg-transparent hover:bg-transparent shadow-none p-0">
          <Image src={circleIcon} alt="Krea Logo" className="w-10 h-10" />
        </Button>
      </div>
    </div>
  );
}
