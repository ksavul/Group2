import { ethers } from "hardhat";

const PROPOSALS = ["Proposal 1", "Proposal 2", "Proposal 3"];

async function main() {
  const proposal = process.argv.slice(2);
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  PROPOSALS.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });
  // TODO
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
