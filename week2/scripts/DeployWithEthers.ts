import { ethers } from "ethers";
import { Ballot__factory } from "../typechain-types";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const proposals = process.argv.slice(2);
  console.log("Deploying Ballot contract");
  console.log("Proposals: ");
  proposals.forEach((element, index) => {
    console.log(`Proposal N. ${index + 1}: ${element}`);
  });

  const provider = ethers.getDefaultProvider("sepolia");

  const provider = new ethers.console.log(`Using address ${wallet.address}`);
  const balanceBN = await provider.getBalance(wallet.address);
  const balance = Number(ethers.formatUnits(balanceBN));
  console.log(`Wallet balance ${balance}`);
  if (balance < 0.01) {
    throw new Error("Not enough ether");
  }

  const ballotFactory = new Ballot__factory();
  const ballotContract = await ballotFactory.deploy(
    proposals.map(ethers.encodeBytes32String)
  );
  await ballotContract.deployed();

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
