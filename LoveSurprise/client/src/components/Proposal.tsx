import { useState, useRef, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProposalProps {
  onYes: () => void;
}

export default function Proposal({ onYes }: ProposalProps) {
  const [noButtonOffset, setNoButtonOffset] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const noButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleNoClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Generate random direction: up, down, left, right, or diagonal
    const directions = [
      { x: 30, y: 0 }, // right
      { x: -30, y: 0 }, // left
      { x: 0, y: 30 }, // down
      { x: 0, y: -30 }, // up
      { x: 30, y: 30 }, // diagonal down-right
      { x: -30, y: 30 }, // diagonal down-left
      { x: 30, y: -30 }, // diagonal up-right
      { x: -30, y: -30 }, // diagonal up-left
    ];

    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    setNoButtonOffset((prev) => ({
      x: prev.x + randomDirection.x,
      y: prev.y + randomDirection.y,
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div
        className={`text-center max-w-2xl w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="mb-8 flex justify-center gap-3">
          <Heart
            className="w-12 h-12 text-[#ff6b9d] fill-[#ff6b9d] animate-bounce"
            style={{ animationDelay: "0ms" }}
          />
          <Heart
            className="w-16 h-16 text-[#ff6b9d] fill-[#ff6b9d] animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <Heart
            className="w-12 h-12 text-[#ff6b9d] fill-[#ff6b9d] animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>

        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-12 leading-tight"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Will you Marry Me?
        </h1>

        <p
          className="text-xl md:text-2xl text-foreground/80 mb-12 font-serif"
          style={{ fontFamily: "Lora, serif" }}
        >
          I promise to make every moment together unforgettable...
        </p>

        <div className="flex gap-6 items-center justify-center mb-12">
          <Button
            data-testid="button-yes"
            onClick={onYes}
            size="lg"
            className="bg-[#ff6b9d] hover:bg-[#c44569] text-white px-12 py-6 text-2xl rounded-full shadow-lg transition-transform hover:scale-110"
          >
            Yes! 💖
          </Button>

          <Button
            ref={noButtonRef}
            data-testid="button-no"
            onClick={handleNoClick}
            size="lg"
            className="bg-[#ff6b9d] hover:bg-[#c44569] text-white px-12 py-6 text-2xl rounded-full shadow-lg transition-all duration-300 ease-out"
            style={{
              transform: `translate(${noButtonOffset.x}px, ${noButtonOffset.y}px)`,
            }}
          >
            No 😠
          </Button>
        </div>

        <p className="text-sm md:text-base text-foreground/60 mt-12 italic font-serif">
          (Try clicking "No" if you dare... 😏)
        </p>
      </div>
    </div>
  );
}
