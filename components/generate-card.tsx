import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export type GenerateCardType = {
  title: string;
  description: string;
  isNew: boolean;
  Icon: React.ComponentType;
};

export default function GenerateCard({
  title,
  description,
  isNew,
  Icon,
}: GenerateCardType) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon />
        <div>
          <div className="flex gap-1 mb-[0.15rem]">
            <h3 className="text-primary font-semibold text-[0.915rem]">
              {title}
            </h3>
            {isNew && (
              <Badge className="bg-blue-600 font-medium rounded-lg dark:text-white">
                New
              </Badge>
            )}
          </div>
          <p className="text-sm max-w-[25ch] text-muted-foreground leading-4">
            {description}
          </p>
        </div>
      </div>
      <Button className="bg-muted text-primary rounded-2xl w-20 hover:bg-muted font-medium">
        Open
      </Button>
    </div>
  );
}
