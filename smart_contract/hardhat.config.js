require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/C3ECGYqFjoZ8BRHaZJolvudmuR-lNmFP',
      accounts: ['f4821ad6b38d758e93f9e18a253c55d752898b09fbd4188a738d4aef0efe2940'],
    },
  },
};