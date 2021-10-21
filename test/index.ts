import { expect } from "chai";
import { ethers } from "hardhat";

describe("Test signing", function () {
  it("sign", async function () {
    const [account] = await ethers.getSigners();
    console.log(await account.signMessage("test"));
  });
});
