import { ethers } from "hardhat";
import * as dotenv from 'dotenv';
import { Ballot, Ballot__factory } from "../typechain-types";
dotenv.config();

async function main() {
    const PROPOSALS = ["Proposal1", "Proposal2", "Proposal3"];

    console.log("Deploying contract in Sepolia...");
    //const provider = new ethers.JsonRpcProvider("https://eth-sepolia.g.alchemy.com/v2/odf6Sp-CPyT2B2awMel1E1J7AhvNqu4s");
    //const wallet = new ethers.Wallet(process.env.PRIVATE_KEY ?? "");

    const [wallet] = await ethers.getSigners();
    console.log("Deploying with address: ", wallet.address);

    //const ballotFactory = new Ballot__factory();
    const ballotFactory = await ethers.getContractFactory("Ballot");
    const ballotContract = await ballotFactory.deploy(PROPOSALS.map(ethers.encodeBytes32String));
    await ballotContract.waitForDeployment();
    const address = await ballotContract.getAddress();

    await ballotContract.waitForDeployment();
    console.log("Contract Deployed!")
    console.log("Ballot Contract deployed at address: ", address);
    


}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });