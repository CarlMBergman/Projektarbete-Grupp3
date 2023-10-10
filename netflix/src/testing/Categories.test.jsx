import { describe, it, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import Categories from "../views/Categories/Categories";
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
    render(<Categories/>, {wrapper: BrowserRouter})
})

describe('tests for categories', () => {

    it('should display 15 different categories', () => {
        expect(screen.getAllByRole('heading', {level: 2})).toHaveLength(15)
    })

    it('should show The Dark Knight in 3 different categories', () => {
        expect(screen.getAllByText('The Dark Knight')).toHaveLength(3)
    })

    it('should show Fight Club only one time', () => {
        expect(screen.getByText('Fight Club')).toBeInTheDocument()
    })
})

// describe('testing navigation on click', () => {

//     it('should navigate to filmView', () => {
//         const title = screen.findAllByTitle('The Godfather')
//         await userEvent.click(title)
//     })
// })

it('should navigate to filmView', () => {

})