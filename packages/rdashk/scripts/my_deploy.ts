import { ethers } from "hardhat";

async function main() {
  const Zombie = await ethers.getContractFactory("ZombieFactory");
  const lock = await Zombie.deploy();

  await lock.deployed();

  console.log(`deployed to ${lock.address}}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
