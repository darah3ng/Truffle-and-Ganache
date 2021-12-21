// Help Truffle find `TruffleTutorial.sol` in the `/contracts` directory
const TruffleTutorial = artifacts.require("TruffleTutorial");

module.exports = function(deployer) {
  // Command Truffle to deploy the smart contract
  deployer.deploy(TruffleTutorial);
}