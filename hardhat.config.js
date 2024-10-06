/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

// const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.11",
   networks: {
       base_sepolia: {
      chainId: 84532,
      url: "https://sepolia.base.org",
      accounts: ["07c8057a99ba7fb33c6698a39f08a00720dca499aacd0beb86601c69e0fbc268"],
    },
    },
}