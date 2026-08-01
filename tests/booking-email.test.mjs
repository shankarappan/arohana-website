import test from "node:test";
import assert from "node:assert/strict";
import { BOOKING_EMAIL, buildBookingMailto } from "../src/booking-email.js";

test("booking enquiries are addressed to info@arohana.nz with reply details", () => {
  const mailto = buildBookingMailto({
    name: "Arohana Festival",
    email: "presenter@example.com",
    message: "We would like to discuss a festival performance.",
  });
  const url = new URL(mailto);

  assert.equal(BOOKING_EMAIL, "info@arohana.nz");
  assert.equal(url.protocol, "mailto:");
  assert.equal(url.pathname, "info@arohana.nz");
  assert.equal(url.searchParams.get("subject"), "Arohana booking enquiry — Arohana Festival");
  assert.match(url.searchParams.get("body"), /Reply email: presenter@example\.com/);
  assert.match(url.searchParams.get("body"), /festival performance/);
  assert.match(url.searchParams.get("body"), /Sent from arohana\.nz/);
});
