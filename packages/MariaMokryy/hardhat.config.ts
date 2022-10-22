import "@nomiclabs/hardhat-waffle";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomicfoundation/hardhat-network-helpers";
import "@nomicfoundation/hardhat-chai-matchers/withArgs";

import { HardhatUserConfig } from "hardhat/config";

const config: HardhatUserConfig = {

  solidity: {
    compilers: [
      {
        version: "0.8.17",
      },
      {
        version: "0.4.25",
        settings: {},
      },
    ],
  },
};

export default config;
