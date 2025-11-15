import GiftBox from "../GiftBox";

export default function GiftBoxExample() {
  return (
    <GiftBox 
      onOpen={() => console.log("Gift opened!")} 
    />
  );
}
