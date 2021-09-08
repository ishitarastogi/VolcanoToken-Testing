const VolcanoToken = artifacts.require("VolcanoToken");

//Dummy test

 contract("VolcanoToken", () => {           
// it ("balance should be zero", async () => {
//     const volcanoToken= await VolcanoToken.deployed();
//     assert(volcanoToken.address !== '');
// })

it ("balance should be 1000", async () => {
    const volcanoToken= await VolcanoToken.deployed();
    const ownerAddress = await volcanoToken.owner();
    const balance = await volcanoToken.balanceOf(ownerAddress);
    assert(balance.toNumber()===1000)
   
})

it ("balance should be zero ", async () => {
    const volcanoToken= await VolcanoToken.deployed();
    // const ownerAddress = await volcanoToken.owner();
    const balance = await volcanoToken.balanceOf('0xcB7C09fEF1a308143D9bf328F2C33f33FaA46bC2');
    assert(balance.toNumber()===0)
   
})
});