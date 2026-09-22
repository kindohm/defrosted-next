import assert from "node:assert/strict";
import test from "node:test";

import {
  DEFROSTED_TIME_ZONE,
  getDefrostedStatus,
  getThanksgivingDay,
} from "./defrosted-status";

const nyNoon = (date: string) => new Date(`${date}T12:00:00-05:00`);
const nyNoonDst = (date: string) => new Date(`${date}T12:00:00-04:00`);

test("thanksgiving is the fourth Thursday in November", () => {
  assert.equal(getThanksgivingDay(2026), 26);
  assert.equal(getThanksgivingDay(2027), 25);
});

test("frozen runs from new year through october", () => {
  assert.equal(getDefrostedStatus(nyNoon("2026-01-01")), "frozen");
  assert.equal(getDefrostedStatus(nyNoonDst("2026-10-31")), "frozen");
});

test("defrosted starts november first and includes thanksgiving day", () => {
  assert.equal(getDefrostedStatus(nyNoon("2026-11-01")), "defrosted");
  assert.equal(getDefrostedStatus(nyNoon("2026-11-26")), "defrosted");
});

test("hot starts the day after thanksgiving and continues through december", () => {
  assert.equal(getDefrostedStatus(nyNoon("2026-11-27")), "hot");
  assert.equal(getDefrostedStatus(nyNoon("2026-12-31")), "hot");
});

test("the default timezone is configurable from a single exported constant", () => {
  assert.equal(DEFROSTED_TIME_ZONE, "America/New_York");
});
