import { NYTime } from "../src/timeCounterToNY";
import { expect } from "chai";

describe("Example testing of module `module`", () => {
  describe("function NYTime()", () => {
    it("should return 15 дней", () => {
      expect(NYTime(new Date(2022, 11, 17))).to.be.equal(
        "До нового года осталось 15 дней 0 часов 0 минут 0 секунд "
      );
    });

    it("should return 285 дней", () => {
      expect(NYTime(new Date(2022, 2, 22))).to.be.equal(
        "До нового года осталось 285 дней 0 часов 0 минут 0 секунд "
      );
    });

    it("should return 234 дня", () => {
      expect(NYTime(new Date(2022, 4, 12))).to.be.equal(
        "До нового года осталось 234 дней 0 часов 0 минут 0 секунд "
      );
    });
  });
});
