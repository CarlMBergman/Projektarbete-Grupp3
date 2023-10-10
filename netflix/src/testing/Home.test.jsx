import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Home from "../views/Home/Home";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(<Home />, { wrapper: BrowserRouter });
});

describe("App", () => {
  test("Should display trending movies", () => {
    expect(screen.getAllByText("The Godfather: Part II")).toHaveLength(2);
    expect(screen.getAllByText("Release year: 1974")).toHaveLength(2);
  });

  test("Should be able to save a trending movie", async () => {
    const user = userEvent.setup();
    const buttons = screen.getAllByTestId("trending-save-btn-0");

    expect(buttons).toHaveLength(2);
    expect(screen.getAllByText("The Godfather: Part II")).toHaveLength(2);
    expect(screen.getAllByText("Release year: 1974")).toHaveLength(2);

    const btn = buttons[0];
    await user.click(btn);
  });

  test("Should display recommended movies", () => {
    expect(screen.getAllByText("Recommended for you")).toHaveLength(1);
    expect(screen.getAllByText(/Rating:/)).toHaveLength(42);
    expect(screen.getAllByText(/Release year:/)).toHaveLength(42);
  });

  test("Should be able to save a recommended movie", async () => {
    const user = userEvent.setup();
    const buttons = screen.getAllByTestId("recommended-save-btn-0");

    expect(buttons).toHaveLength(2);

    const btn = buttons[0];
    await user.click(btn);
  });
});
