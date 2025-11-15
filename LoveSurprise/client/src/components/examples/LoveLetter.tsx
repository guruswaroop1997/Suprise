import LoveLetter from "../LoveLetter";

export default function LoveLetterExample() {
  return (
    <LoveLetter 
      onContinue={() => console.log("Continue clicked!")} 
    />
  );
}
