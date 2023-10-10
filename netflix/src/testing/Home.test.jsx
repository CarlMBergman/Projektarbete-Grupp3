/* import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../App";
import Home from "../views/Home/Home";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
  render(<Home />, { wrapper: BrowserRouter });
});

describe("App", () => {
  test("Should display trending movies", () => {
    const movie = screen.getAllByRole("article");

    expect(screen.movie).toBeInTheDocument();
    expect(screen.findByText("Trending Movies")).toBeInTheDocument();
  });



  test("Should display trending movies release date", () => {
    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Trending Movies")).toBeInTheDocument();
    expect(screen.findByText("Relaste date:")).toBeInTheDocument();
  });

  test("Should display trending movies rating", () => {
    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Trending Movies")).toBeInTheDocument();
    expect(screen.findByText("Rating:")).toBeInTheDocument();
  });

  test("Should display recommended movies", () => {
    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Recommended for you")).toBeInTheDocument();
  });

  test("Should display recommendeds section release date", () => {
    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Recommended for you")).toBeInTheDocument();
    expect(screen.findByText("Relaste date:")).toBeInTheDocument();
  });

  test("Should display recommendeds movies rating", () => {
    expect(screen.getByText("Recommended for you")).toBeInTheDocument();
    //expect(screen.findByText("Rating:")).toBeInTheDocument();
  });

});
  */