import { useState } from "react";
import React from "react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";
import lotteryJson from "./assets/Lottery.json";

const lotAddress = "0xFc64B9b724BdE2728369E8a13000DF949068B5Fb";


function BetComponent() {
  const [isLoading, setLoading] = useState(false);

  const { config } = usePrepareContractWrite({
    address: lotAddress, 
    abi: lotteryJson.abi,
    functionName: "openBets", 
  });
  const { write } = useContractWrite(config);

  const handleOpenBetClick = async () => {
    try {
      setLoading(true);
      console.log("Opening bet...");
      write?.(); // Call the open bet function
      console.log("Bet opened successfully!");
    } catch (error) {
      console.error("Error opening bet:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "400px", margin: "20px auto" }}>
      <h4>Bet Component</h4>
      <button
        style={{ width: "56%", padding: "10px", fontSize: "16px", background: "#1976d2", color: "white", border: "none", cursor: "pointer" }}
        onClick={handleOpenBetClick}
        disabled={isLoading}
      >
        {isLoading ? "Opening..." : "Open Bet"}
      </button>
    </div>
  );
   
}

export default BetComponent;
