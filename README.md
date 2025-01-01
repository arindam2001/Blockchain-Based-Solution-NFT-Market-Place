## NFT Marketplace Project:

Project Overview

## This project is a fully functional decentralized NFT Marketplace that allows users to mint, buy, sell, and manage NFTs securely using blockchain technology. It leverages smart contracts deployed on the Ethereum Sepolia test network.

Features

Mint NFTs: Users can mint ERC-721 compliant NFTs with metadata stored on IPFS via Pinata.
List NFTs for Sale: Minted NFTs can be listed on the marketplace for others to purchase.
Buy NFTs: Users can securely purchase listed NFTs using Ethereum.
Burn NFTs: Owners can burn their NFTs to remove them from the marketplace.

---

Prerequisites
Before running the project, ensure you have the following installed:

Node.js (v14 or later)
npm (Node Package Manager)
MetaMask browser extension
Hardhat (for smart contract deployment)
Alchemy account (for connecting to the Sepolia testnet)
Pinata account (for IPFS file storage)

---

Configuration: hardhat.config.js

sepolia: {
url: "<ALCHEMY_API_URL>", // Replace with your Alchemy API URL
accounts: ["<YOUR_METAMASK_PRIVATE_KEY>"], // Replace with your MetaMask private key
}

Configuration: pinata.js

sepolia: {
url: "<ALCHEMY_API_URL>", // Replace with your Alchemy API URL
accounts: ["<YOUR_METAMASK_PRIVATE_KEY>"], // Replace with your MetaMask private key
}
Configuaration: .env

REACT_APP_PINATA="<YOUR_PINATA_API_KEY>"
REACT_APP_PINATA_SECRET="<YOUR_PINATA_SECRET_KEY>"

---

Commands

cd 2024JCS2041_2024JCS2048
npm install
npx hardhat run --network sepolia scripts/deploy.js
npm start

---

How It Works

Backend: Smart Contracts
ERC-721 Implementation: Supports minting, burning, and transferring NFTs.
Marketplace Functions:
List NFTs for sale
Execute NFT sales
Manage NFT ownership
Frontend: React DApp
User Interaction:
Connect MetaMask wallet
View available NFTs
List NFTs for sale or buy NFTs
IPFS Storage: Metadata for NFTs is securely stored on IPFS via Pinata.

---

Project Authors

Arindam Sal (2024JCS2041)
Ayan Shil (2024JCS2048)
Course: SIL763
Semester: 1, 2024-2025

---
