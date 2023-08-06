# Ballot Smart Contract Project

This repository contains the code for the Ballot.sol smart contract, aimed at implementing a decentralized voting system on the Ethereum network. We've developed this project using Solidity and Hardhat.

## Table of Contents
- [Overview](#overview)
- [Scripts](#scripts)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Overview

This smart contract allows for casting, delegating, and querying votes on a series of proposals. It emphasizes transparent, secure, and decentralized decision-making.

## Scripts

We have developed several TypeScript scripts to interact with the Ballot contract:

1. **castingVotes.ts**: This script is used to cast votes for a particular proposal.
2. **delegateVotes.ts**: Through this script, voters can delegate their votes to others.
3. **deployBallot.ts**: This script handles the deployment of the Ballot contract onto the Ethereum network.
4. **giveVotingRights.ts**: Administrators can use this script to grant voting rights to specific addresses.
5. **queryingResults.ts**: This script facilitates querying the results, allowing you to fetch the winning proposal's name.

These scripts are designed to be used with Hardhat, not Truffle, providing a more streamlined development experience.

## Installation

Follow these steps to set up the project:

```bash
git clone https://github.com/your-username/ballot.git
cd ballot
npm install
```

## Usage

To run any of the scripts, use the following command:

```bash
npx hardhat run scripts/<script-name>.ts
```
Replace `<script-name>` with the name of the script you want to execute.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

---

Feel free to contribute or raise any issues. Enjoy using the Ballot smart contract system!