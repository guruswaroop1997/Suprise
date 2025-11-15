import { useEffect, useState } from "react";
import { Heart, Sparkles, RotateCcw } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import dancingCatImage from "@assets/image_1763206410404.png";

export default function Celebration() {
  const [, setLocation] = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [hearts, setHearts] = useState<
    Array<{ id: number; x: number; delay: number }>
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);

    const heartInterval = setInterval(() => {
      const newHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        delay: Math.random() * 2,
      };
      setHearts((prev) => [...prev, newHeart].slice(-15));
    }, 500);

    return () => {
      clearTimeout(timer);
      clearInterval(heartInterval);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-0 animate-float-up pointer-events-none"
          style={{
            left: `${heart.x}%`,
            animationDelay: `${heart.delay}s`,
          }}
        >
          <Heart className="w-6 h-6 text-[#ff6b9d] fill-[#ff6b9d] opacity-60" />
        </div>
      ))}

      <div
        className={`text-center max-w-3xl w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        <div className="mb-8 flex justify-center gap-3">
          <Sparkles className="w-10 h-10 text-[#ffd700] fill-[#ffd700] animate-pulse" />
          <Sparkles
            className="w-12 h-12 text-[#ffd700] fill-[#ffd700] animate-pulse"
            style={{ animationDelay: "0.3s" }}
          />
          <Sparkles
            className="w-10 h-10 text-[#ffd700] fill-[#ffd700] animate-pulse"
            style={{ animationDelay: "0.6s" }}
          />
        </div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground mb-6"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          Yay! 🎉
        </h1>

        <p
          className="text-2xl md:text-4xl text-foreground/90 mb-8 font-serif"
          style={{ fontFamily: "Lora, serif" }}
        >
          You've made me the happiest!
        </p>

        <div className="flex justify-center mb-8">
          <img
            data-testid="img-dancing-cat"
            src={dancingCatImage}
            alt="Dancing celebration cat"
            className="w-64 h-64 md:w-80 md:h-80 object-contain"
            style={{
              filter: "drop-shadow(0 10px 30px rgba(255, 107, 157, 0.3))",
            }}
          />
        </div>

        <div
          className="space-y-4 text-lg md:text-2xl text-foreground/80 font-serif max-w-2xl mx-auto"
          style={{ fontFamily: "Lora, serif" }}
        >
          <p className="italic">
            "This is the beginning of our beautiful forever..."
          </p>
          <div className="flex justify-center gap-2 pt-4">
            <Heart className="w-6 h-6 text-[#ff6b9d] fill-[#ff6b9d] animate-pulse" />
            <Heart
              className="w-8 h-8 text-[#ff6b9d] fill-[#ff6b9d] animate-pulse"
              style={{ animationDelay: "0.2s" }}
            />
            <Heart
              className="w-6 h-6 text-[#ff6b9d] fill-[#ff6b9d] animate-pulse"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
        </div>

        <p
          className="text-3xl md:text-4xl font-serif mt-12 text-foreground"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          With all my love,
          <br />
          <span className="text-[#BF1A1A]">Swaroop 💕</span>
        </p>
      </div>
    </div>
  );
}
