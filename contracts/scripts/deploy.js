const { ethers } = require("hardhat");



async function main() {
  const DeNotesFactory=await ethers.getContractFactory("DeNotes")
  console.log("Deploying...")
  const DeNotes=await DeNotesFactory.deploy()
  await DeNotes.deployed()
  console.log(`Deployed to ${DeNotes.address}`)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
