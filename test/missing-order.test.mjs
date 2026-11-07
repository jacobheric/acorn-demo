import assert from "node:assert/strict";
import { test } from "node:test";
import { quoteOrder } from "../src/order.mjs";

test("explains how to fix an order with no input", () => {
  assert.throws(() => quoteOrder(), /Add at least one item/);
});

test("explains how to fix an order without items", () => {
  assert.throws(() => quoteOrder({ shippingCents: 250 }), /Add at least one item/);
});
