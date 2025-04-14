
import { useState } from "react";
import { ChevronDown, ChevronUp, ExternalLink, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface GameCardProps {
  title: string;
  description: string;
  fullDescription?: string;
  icon: React.ReactNode;
  tags: string[];
  image?: string;
  webUrl?: string;
  downloadUrl?: string;
  onPlayNow: (name: string) => void;
}

const GameCard = ({
  title,
  description,
  fullDescription,
  icon,
  tags,
  image,
  webUrl,
  downloadUrl,
  onPlayNow
}: GameCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-review-cyan/20 shadow-md bg-review-black/30 hover:shadow-lg transition-shadow h-full">
      <CardHeader>
        <div className="mb-4 text-review-cyan">
          {icon}
        </div>
        <CardTitle className="text-review-cyan">{title}</CardTitle>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="bg-review-cyan/10 text-review-cyan text-xs font-medium px-2.5 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <Button 
              className="flex-1 bg-review-black hover:bg-gray-900 text-review-cyan border border-review-cyan/30"
              onClick={() => onPlayNow(title)}
            >
              Play Now
            </Button>
            
            {webUrl && (
              <Button
                className="flex-1 bg-review-black hover:bg-gray-900 text-review-cyan border border-review-cyan/30"
                onClick={() => window.open(webUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Play on Web
              </Button>
            )}
            
            {downloadUrl && (
              <Button
                className="flex-1 bg-review-black hover:bg-gray-900 text-review-cyan border border-review-cyan/30"
                onClick={() => window.open(downloadUrl, '_blank')}
              >
                <Download className="w-4 h-4 mr-2" />
                Download APK
              </Button>
            )}
          </div>

          {fullDescription && (
            <Button
              variant="ghost"
              className="w-full text-review-cyan hover:bg-review-cyan/10"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? (
                <ChevronUp className="w-4 h-4 mr-2" />
              ) : (
                <ChevronDown className="w-4 h-4 mr-2" />
              )}
              {isExpanded ? "Show Less" : "Know More"}
            </Button>
          )}

          <div className={cn(
            "space-y-4 overflow-hidden transition-all duration-300",
            isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          )}>
            <p className="text-gray-300 text-sm">{fullDescription}</p>
            
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full rounded-lg object-cover aspect-video"
              />
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
