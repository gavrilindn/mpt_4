import { countDays } from "../countDays";
import { expect } from "chai";

describe("Example testing of module `module`", () => {
  it("test 1", () => {
    expect(countDays(new Date("2022-09-27"))).to.be.equal("До нового года осталось 13 недель, 4 дней, 16 часов, 0 минут, 0 секунд, 0 миллисекунд.");
  });
  it("test 2", () => {
    expect(countDays(new Date("2022-12-30"))).to.be.equal("До нового года осталось 0 недель, 1 дней, 16 часов, 0 минут, 0 секунд, 0 миллисекунд.");
  });
});