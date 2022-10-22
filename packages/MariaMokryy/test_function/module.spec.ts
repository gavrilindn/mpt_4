import { getTimeToNewYear } from "../src/function";
import { expect } from "chai";

describe("function getTimeToNewYear()", () => {
  it("should return 365, when getTimeToNewYear(new Date(2023, 0, 2, 0, 0, 0)) called", () => {
    expect(getTimeToNewYear(new Date(2023, 0, 2, 0, 0, 0))).to.be.equal(365);
  });

  it.skip("should return 96, when getTimeToNewYear(new Date()) called", () => {
    expect(getTimeToNewYear(new Date())).to.be.equal(96);
  });
});
