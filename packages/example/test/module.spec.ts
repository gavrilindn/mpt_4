import { v1, f1 } from "../src/module";
import { expect } from "chai";

describe("Example testing of module `module`", () => {
  it("should export v1 equal to 300", () => {
    expect(v1).to.be.equal(300);
  });

  describe("function f1()", () => {
    it("should return -1, when f(1) called", () => {
      expect(f1(1)).to.be.equal(-1);
    });

    it("should return 0, when f(0) called", () => {
      expect(f1(0)).to.be.equal(0);
    });

    it("should return 0.379, when f(-0.379) called", () => {
      expect(f1(-0.379)).to.be.equal(0.379);
    });
  });
});
