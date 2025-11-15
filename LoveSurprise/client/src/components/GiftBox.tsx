import { useState } from "react";
import { Gift } from "lucide-react";

interface GiftBoxProps {
  onOpen: () => void;
}

export default function GiftBox({ onOpen }: GiftBoxProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-8 animate-in fade-in duration-1000">
          A Special Surprise Awaits...
        </h1>
        
        <button
          data-testid="button-open-gift"
          onClick={onOpen}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative group cursor-pointer bg-transparent border-none p-0 transition-transform duration-300 hover:scale-105 active:scale-95"
          style={{
            perspective: "1000px",
          }}
        >
          <div
            className="relative w-64 h-64 md:w-80 md:h-80 transition-all duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: isHovered ? "rotateY(10deg) rotateX(-5deg)" : "rotateY(0deg) rotateX(0deg)",
            }}
          >
            <div
              className="absolute inset-0 rounded-3xl transition-all duration-500"
              style={{
                background: "linear-gradient(135deg, #ff6b9d 0%, #c44569 100%)",
                boxShadow: isHovered 
                  ? "0 30px 60px rgba(196, 69, 105, 0.4), 0 0 80px rgba(255, 255, 255, 0.6)"
                  : "0 20px 40px rgba(196, 69, 105, 0.3), 0 0 40px rgba(255, 255, 255, 0.4)",
                transform: "translateZ(20px)",
              }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <Gift className="w-24 h-24 md:w-32 md:h-32 text-white" strokeWidth={1.5} />
              </div>
              
              <div
                className="absolute top-1/2 left-0 right-0 h-12 md:h-16 -translate-y-1/2"
                style={{
                  background: "linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 100%)",
                }}
              />
              
              <div
                className="absolute left-1/2 top-0 bottom-0 w-12 md:w-16 -translate-x-1/2"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0.3) 100%)",
                }}
              />
              
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,107,157,0.3) 100%)",
                  transform: "translateZ(30px)",
                }}
              />
            </div>
          </div>
        </button>
        
        <p className="text-xl md:text-2xl text-foreground/80 mt-8 animate-in fade-in duration-1000 delay-500 font-serif italic">
          Click the gift to open...
        </p>
      </div>
    </div>
  );
}
