require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: '<YOUR_HTTP_ALCHEMY_API_URL>',
      accounts: ['<YOUR_METAMASK_ACCOUNT_EXPORTED_PRIVATE_KEY>']
    }
  }
}
