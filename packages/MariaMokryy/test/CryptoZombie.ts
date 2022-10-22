import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import "@nomicfoundation/hardhat-chai-matchers";
import "@nomiclabs/hardhat-ethers";


describe("ZombieHelper", function () {

    async function deployZombieHelperFixture() {
        const [owner, user1] = await ethers.getSigners();

        const ZH = await ethers.getContractFactory("ZombieHelper");
        const zombieHelper = await ZH.deploy();
        zombieHelper.createRandomZombie("NoName");

        return { zombieHelper, owner, user1 };
    };

    describe("ZombieLevelUp", function () {
        it("Should revert with the right error if called with value != levelUpFee", async function () {
            const { zombieHelper, owner } = await loadFixture(deployZombieHelperFixture);
            await zombieHelper.setLevelUpFee(10, { from: owner.address });
            await zombieHelper.levelUp(0, { value: 10 });

            await expect(zombieHelper.levelUp(0, { value: 8 })).to.be.revertedWith("ETH value should be equal established level up fee");

        });
    });

});


