import { daysLeft } from "../src/the_function";
import "mocha";
import { assert } from "chai";

describe("Days before New Year", function () {
  it("The program results are equal from the same date", function () {
    assert.equal(daysLeft(new Date()), daysLeft(new Date()));
  });

  it("Beginning of this year. Should return 365 days", function () {
    assert.equal(
      daysLeft(new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)),
      "Time left before New Year: 365 days 0 hours 0 minutes 0 seconds"
    );
  });

  it("Time left from 2016-05-19", function () {
    assert.equal(
      daysLeft(new Date("2016-05-19")),
      "Time left before New Year: 227 days 0 hours 0 minutes 0 seconds"
    );
  });

  it("The time not equal", function () {
    assert.notEqual(
      daysLeft(new Date()),
      "Time left before New Year: 365 days 0 hours 0 minutes 0 seconds"
    );
  });
});
