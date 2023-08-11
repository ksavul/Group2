import { ethers } from "hardhat";

async function main() {
  const proposals = process.argv.slice(2);

  //   Logging the proposals
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });

  // Deploying the contract
  const ballotFactory = await ethers.getContractFactory("Ballot");
  const ballotContract = await ballotFactory.deploy(
    proposals.map(ethers.encodeBytes32String)
  );

  //   Waiting for the deployment
  await ballotContract.waitForDeployment();

  //   Logging the address of the contract
  const address = ballotContract.getAddress();

  //   Logging the proposals
  console.log(`Ballot deployed at: ${address}`);
  for (let index = 0; index < proposals.length; index++) {
    const proposal = await ballotContract.proposals(index);
    const name = ethers.decodeBytes32String(proposal.name);
    console.log({ index, name, proposal });
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
