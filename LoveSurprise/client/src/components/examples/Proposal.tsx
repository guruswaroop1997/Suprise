import Proposal from "../Proposal";

export default function ProposalExample() {
  return (
    <Proposal 
      onYes={() => {
        console.log("Yes clicked!");
        alert("Yay! You said yes! 💖");
      }} 
    />
  );
}
