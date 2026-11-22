import { test } from "node:test";
import assert from "node:assert/strict";
import { sum } from "../src/sum.js";

test("adds numbers", () => {
  assert.equal(sum([1, 2, 3]), 6);
});

test("returns 0 for an empty list", () => {
  assert.equal(sum([]), 0);
});

test("rejects values that are not finite numbers", () => {
  assert.throws(() => sum([1, "2"]), TypeError);
  assert.throws(() => sum([1, Number.NaN]), TypeError);
});

test("rejects input that is not an array", () => {
  assert.throws(() => sum("1,2"), TypeError);
});
