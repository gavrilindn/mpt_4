import { ethers } from "hardhat";

async function main() {

  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy();

  const Token2 = await ethers.getContractFactory("Token");
  const token2 = await Token2.deploy();

  await token.deployed();
  await token.deployed();

  console.log(`Lock with 2 ETH deployed to\n${token.address}\nand\n${token2.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
