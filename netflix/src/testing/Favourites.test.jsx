import { it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Favourites from "../views/Favourites/Favourites";

it.only('should show "Favourites"', () => {
    render(<Favourites/>)
    
    expect(screen.getByText("Favourites")).toBeInTheDocument();
})