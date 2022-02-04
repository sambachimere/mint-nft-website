require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: './src/artifacts'
  },
  networks: {
    ropsten: {
      url: "https://ropsten.infura.io/v3/f30b0df73f5b4f78a0f99e990e49bbee",
      accounts: ['ba67166c3efd5f6bfa2db12304496a43b6cd68fa5272e3e6c3c62df1ac61319f']
    }
  }
};