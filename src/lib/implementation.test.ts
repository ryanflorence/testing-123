import { describe, it } from "node:test";
import * as assert from "node:assert";
import { fib } from "./implementation.ts";

describe("fib", () => {
  it("should return 0 for 0", () => {
    assert.strictEqual(fib(0), 0);
  });

  it("should return 1 for 1", () => {
    assert.strictEqual(fib(1), 1);
  });

  it("should return 1 for 2", () => {
    assert.strictEqual(fib(2), 1);
  });

  it("should return 55 for 10", () => {
    let f = fib(10);
    assert.strictEqual(f, 55);
  });
});
