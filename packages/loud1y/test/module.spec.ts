// import { v1, f1 } from "../src/module";
import { expect } from "chai";
import {calculate} from "../src/script"

describe("Example testing of module `module`", () => {

  describe("function calculate()", () => {
    it("should return 365, when calculate(01.01.2022) called", () => {
      expect(calculate(new Date(2022, 0, 1)).days).to.be.equal(365);
    });
  });

});
