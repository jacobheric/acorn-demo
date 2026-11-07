import assert from "node:assert/strict";
import { test } from "node:test";
import { quoteOrder } from "../src/order.mjs";

test("a free item still pays shipping", () => {
  assert.equal(quoteOrder({ items: [{ priceCents: 0, quantity: 1 }], shippingCents: 250 }).totalCents, 251);
});
