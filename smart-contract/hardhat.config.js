require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.4",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/dCqAh_YtkWaKkPq13A4xWNIRrwOD7hoN",
      accounts: [
        "affdf63285e48ba483cd9f80abeb540cb9fe6ff9b5ad61a3f3a7bdd5f6e3f697",
      ],
    },
  },
};
