import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import App from "../../App";

describe("App", () => {
  test("Should display trending movies", () => {
    render(<App />);

    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Trending Movies")).toBeInTheDocument();
  });

  test("Should display trending movies release date", () => {
    render(<App />);

    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Trending Movies")).toBeInTheDocument();
    expect(screen.findByText("Relaste date:")).toBeInTheDocument();
  });

  test("Should display trending movies rating", () => {
    render(<App />);

    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Trending Movies")).toBeInTheDocument();
    expect(screen.findByText("Rating:")).toBeInTheDocument();
  });

  test("Should display recommended movies", () => {
    render(<App />);

    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Recommended for you")).toBeInTheDocument();
  });

  test("Should display recommendeds section release date", () => {
    render(<App />);

    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Recommended for you")).toBeInTheDocument();
    expect(screen.findByText("Relaste date:")).toBeInTheDocument();
  });

  test("Should display recommendeds movies rating", () => {
    render(<App />);

    const movie = screen.getByRole("article");

    expect(movie).toBeInTheDocument();
    expect(screen.findByText("Recommended for you")).toBeInTheDocument();
    expect(screen.findByText("Rating:")).toBeInTheDocument();
  });
});
