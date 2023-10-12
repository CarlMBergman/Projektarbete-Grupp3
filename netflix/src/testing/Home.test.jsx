import { render, screen, waitFor } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import Home from "../views/Home/Home";
import { BrowserRouter } from "react-router-dom";

/* beforeEach(() => {
  render(<Home />, { wrapper: BrowserRouter });
}); */

describe("App", () => {
  test("Should display trending movies", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getAllByText("The Godfather: Part II")).toHaveLength(2);
    expect(screen.getAllByText("Release year: 1974")).toHaveLength(2);
  });

  test("Should be able to save a trending movie", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    const buttons = screen.getAllByTestId("trending-save-btn-0");

    expect(buttons).toHaveLength(2);
    expect(screen.getAllByText("The Godfather: Part II")).toHaveLength(2);
    expect(screen.getAllByText("Release year: 1974")).toHaveLength(2);

    const btn = buttons[0];
    await user.click(btn);
  });

  test("Should be able to see 'remove movie' after saving a movie from trending", async () => {
    //Tar bort alla filmer från sessionStorage
    sessionStorage.clear();
    render(<Home />, { wrapper: BrowserRouter });
    const user = userEvent.setup();

    //Slick carousel skapar flera element av samma element. För att kunna identifera en viss knapp så skickar vi med knappens index i knappens data-testid
    //Här säger vi att vi vill klicka på dne första knappen i trending movies, som har index 0.
    const buttons = screen.getAllByTestId("trending-save-btn-0");

    expect(buttons).toHaveLength(2);

    await user.click(buttons[0]);
    console.log(buttons[0].textContent);

    //Efter användaren har klickat på knappen så ska det knappens text ändras till "Remove Movie"
    await waitFor(() => expect(buttons[0]).toHaveTextContent(/Remove Movie/));
  });

  test("Should display recommended movies", () => {
    render(<Home />, { wrapper: BrowserRouter });
    expect(screen.getAllByText("Recommended for you")).toHaveLength(1);
    expect(screen.getAllByText(/Rating:/)).toHaveLength(42);
    expect(screen.getAllByText(/Release year:/)).toHaveLength(42);
  });

  test("Should be able to save a recommended movie", async () => {
    render(<Home />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    const buttons = screen.getAllByTestId("recommended-save-btn-0");

    expect(buttons).toHaveLength(2);

    const btn = buttons[0];
    await user.click(btn);
  });

  test("Should be able to see 'remove movie' after saving a movie from recommended", async () => {
    sessionStorage.clear();
    render(<Home />, { wrapper: BrowserRouter });
    const user = userEvent.setup();
    const buttons = screen.getAllByTestId("recommended-save-btn-0");

    expect(buttons).toHaveLength(2);

    await user.click(buttons[0]);
    console.log(buttons[0].textContent);

    await waitFor(() => expect(buttons[0]).toHaveTextContent(/Remove Movie/));
  });
});
