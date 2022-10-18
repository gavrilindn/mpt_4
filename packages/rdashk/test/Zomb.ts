import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("ZombieFactory", function () {

  async function deployZombieOwnerLockFixture() {
    const [owner] = await ethers.getSigners();

    const Z = await ethers.getContractFactory("ZombieFactory");
    const lock = await Z.deploy();
    

    return {lock, owner};
  };
  
  describe("ZombieOwner", function () {
    it("Should get the right owner", async function () {
      const { lock, owner } = await loadFixture(deployZombieOwnerLockFixture);
      expect(await lock.owner()).to.equal(owner.address);
    });
  });
});
