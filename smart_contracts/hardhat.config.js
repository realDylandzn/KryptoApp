
require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-goerli.alchemyapi.io/v2/QRRCa4gQ4QFl9wnElQeH4c2F_ahDHKlo',
      accounts: ['8c3a0598c69a42ec2c02e71661c44b0bc94fe21f919beddcd2367f6eae5c434b'],
    },
  },
};