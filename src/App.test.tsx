import { render } from "@testing-library/react";
import React from "react";

import { App } from "./App";

test("renders learn react link", () => {
  function renderApp() {
    render(<App />);
  }

  expect(renderApp).not.toThrow();
});
