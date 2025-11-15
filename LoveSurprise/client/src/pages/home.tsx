import { useState } from "react";
import { useLocation } from "wouter";
import GiftBox from "@/components/GiftBox";
import LoveLetter from "@/components/LoveLetter";
import Proposal from "@/components/Proposal";
import Celebration from "@/components/Celebration";

type Step = "gift" | "letter" | "proposal" | "celebration";

export default function Home() {
  const [step, setStep] = useState<Step>("gift");

  return (
    <div className="transition-all duration-500">
      {step === "gift" && <GiftBox onOpen={() => setStep("letter")} />}
      {step === "letter" && <LoveLetter onContinue={() => setStep("proposal")} />}
      {step === "proposal" && <Proposal onYes={() => setStep("celebration")} />}
      {step === "celebration" && <Celebration />}
    </div>
  );
}
