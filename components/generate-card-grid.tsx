import GenerateCard from "./generate-card";
import ImageIconGradient from "./icons/gradient/image-icon";
import type { GenerateCardType } from "./generate-card";
import VideoIconGradient from "./icons/gradient/video-icon";
import RealtimeIconGradient from "./icons/gradient/realtime-icon";
import EnhancerIconGradient from "./icons/gradient/enhancer-icon";
import EditIconGradient from "./icons/gradient/edit-icon";
import LipSyncIconGradient from "./icons/gradient/lip-sync-icon";
import MotionTransferIcon from "./icons/motion-transfer-icon";
import TrainIcon from "./icons/train-icon";

const data: GenerateCardType[] = [
  {
    title: "Image",
    description: "Generate images with custom styles in Flux and Ideogram.",
    isNew: true,
    Icon: ImageIconGradient,
  },
  {
    title: "Video",
    description: "Generate videos with Hailuo, Pika, Runway, Luma, and more.",
    isNew: false,
    Icon: VideoIconGradient,
  },
  {
    title: "Realtime",
    description: "Realtime AI rendering on a canvas. Instant feedback loops.",
    isNew: false,
    Icon: RealtimeIconGradient,
  },
  {
    title: "Enhancer",
    description: "Upscale and enhance images and videos up to 22K.",
    isNew: true,
    Icon: EnhancerIconGradient,
  },
  {
    title: "Edit",
    description: "Add objects, change style, or expand photos and generations.",
    isNew: true,
    Icon: EditIconGradient,
  },
  {
    title: "Video Lipsync",
    description: "Lip sync any video to any audio.",
    isNew: true,
    Icon: LipSyncIconGradient,
  },
  {
    title: "Motion Transfer",
    description: "Transfer motion to images and animate characters.",
    isNew: true,
    Icon: MotionTransferIcon,
  },
  {
    title: "Train",
    description: "Teach Krea to replicate your style, products, or characters.",
    isNew: false,
    Icon: TrainIcon,
  },
];

export default function GenerateCardGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
      {data.map((item, index) => (
        <GenerateCard
          key={index}
          title={item.title}
          description={item.description}
          isNew={item.isNew}
          Icon={item.Icon}
        />
      ))}
    </div>
  );
}
