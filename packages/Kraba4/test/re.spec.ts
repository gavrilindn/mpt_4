import { re } from "../re";
import { expect } from "chai";

describe("time for various date", () => {
  it("date(1000)", () => {
    expect(re(new Date(1000))).to.be.equal(
      "Осталось 364 дней 23 часов 59 минут 59 секунд 0 миллисекунд"
    );
  });
});
