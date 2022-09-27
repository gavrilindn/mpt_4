import { getDiff } from "../src/fun";
import { expect } from "chai";

describe("Example testing of module `fun`", () => {
  it("should export getDiff equal to 3 monts 5 days 18 hours", () => {
    expect(getDiff(new Date("2022-09-27"))).to.be.equal("3.6.0");
  });

  it("should export getDiff equal to 3 monts 5 days 18 hours", () => {
    expect(getDiff(new Date("2022-10-31"))).to.be.equal("2.3.0");
  });

  it("should export getDiff equal to 3 monts 5 days 18 hours", () => {
    expect(getDiff(new Date("2022-12-31"))).to.be.equal("0.1.0");
  });
});
