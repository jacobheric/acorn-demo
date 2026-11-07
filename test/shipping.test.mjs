import assert from "node:assert/strict";
import { test } from "node:test";
import { quoteOrder } from "../src/order.mjs";

test("a free item still pays shipping", () => {
  assert.equal(quoteOrder({ items: [{ priceCents: 0, quantity: 1 }], shippingCents: 250 }).totalCents, 250);
});

test("a free order without shipping costs zero", () => {
  assert.equal(quoteOrder({ items: [{ priceCents: 0, quantity: 2 }] }).totalCents, 0);
});

test("shipping is charged once for multiple free items", () => {
  assert.equal(quoteOrder({ items: [{ priceCents: 0, quantity: 3 }], shippingCents: 250 }).totalCents, 250);
});
