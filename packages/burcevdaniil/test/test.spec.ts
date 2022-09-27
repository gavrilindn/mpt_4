import { expect } from "chai";
import { calculateTimeDifference } from "../task2";

describe("testing main", () => {
    it("2020 was more than 1 year ago", () => {
        expect(calculateTimeDifference(new Date("2020.01.01"))).to.be.equal("2 years, 8 months");
    })
})