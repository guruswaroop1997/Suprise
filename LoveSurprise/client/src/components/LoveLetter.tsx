import { useState, useEffect } from "react";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LoveLetterProps {
  onContinue: () => void;
}

export default function LoveLetter({ onContinue }: LoveLetterProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div
        className={`max-w-2xl w-full transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div
          className="relative bg-[#FFFEF9] p-8 md:p-12 shadow-2xl"
          style={{
            border: "5px solid #000000",
            backgroundImage: "linear-gradient(to bottom, #FFFEF9 0%, #FFF8E7 100%)",
          }}
        >
          <div className="absolute top-4 right-4">
            <Heart className="w-8 h-8 text-[#ff6b9d] fill-[#ff6b9d] animate-pulse" />
          </div>

          <div className="space-y-6 text-foreground">
            <h2 className="text-3xl md:text-4xl font-serif text-center mb-8" style={{ fontFamily: "Playfair Display, serif" }}>
              Dear Bujjamma,
            </h2>

            <div className="space-y-4 text-base md:text-lg leading-relaxed" style={{ fontFamily: "Lora, serif" }}>
              <p>
                Parichayam aina kothalo tinu naku set avvudda leda aney doubt vachindi... Instagram lo start aina conversation nemmadiga friends laga marinappudu parledu idi ekkadi varaku veltundo chuddam ani anukunna... But time gadchey koddi nuvvu lekuna undadam kastam emo aney bhavaana Vachindi.
              </p>

              <p>
                Asalu Pelli Cheskovaddu anukunna naku eppudu nachavo ela nachavo telidu... Ninnu istapadadam start chesa.... Ah istam prema laga eppudu marindo telidu... Ah prema na pranam kantey ekkuvaga eppudu marindo telidu... Ah prema lekapotey bratakalenu aney bhavana eppudu modali aindo telidu... Niku baga alavatu padipoya Bujjamma...
              </p>

              <p>
                Nitho life long gadipedddam ani fix ayya. Nuvve naku manchi Partner aney feeling ki vachesa... Intaka mundu ni life ela undo telidu....ika meeda natho undey ni life ni beautiful ga marchali ani nenu anukuntunna... Kastam aina nastam aina... Sukham aina santosham aina... Badha Aina prema aina edaina nithone ani fix ayya.
              </p>

              <p>
                I love you truly from the Deepest of my heart and will try to be a good human beging with you...
              </p>
            </div>

            <div className="pt-8 text-right">
              <p className="text-xl md:text-2xl font-serif italic" style={{ fontFamily: "Playfair Display, serif" }}>
                Itlu ni prema kosam vechi chusey, 
              </p>
              <p className="text-2xl md:text-3xl font-serif mt-2" style={{ fontFamily: "Playfair Display, serif" }}>
                Guru Swaroop
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <Button
              data-testid="button-continue-letter"
              onClick={onContinue}
              size="lg"
              className="bg-[#ff6b9d] hover:bg-[#c44569] text-white px-8 py-6 text-lg rounded-full"
            >
              Continue
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          <Heart className="w-4 h-4 text-[#ff6b9d] fill-[#ff6b9d] animate-pulse" style={{ animationDelay: "0ms" }} />
          <Heart className="w-4 h-4 text-[#ff6b9d] fill-[#ff6b9d] animate-pulse" style={{ animationDelay: "200ms" }} />
          <Heart className="w-4 h-4 text-[#ff6b9d] fill-[#ff6b9d] animate-pulse" style={{ animationDelay: "400ms" }} />
        </div>
      </div>
    </div>
  );
}
