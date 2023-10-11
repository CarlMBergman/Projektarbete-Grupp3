import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

// Fixar Error: matchMedia not present, legacy browsers require a polyfill
// Link to fix for Jest, adapted to vitest
// https://github.com/akiran/react-slick/issues/742#issuecomment-298992238
window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
