import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Categories from "../views/Categories/Categories";
import { BrowserRouter } from "react-router-dom";

describe('tests for categories', () => {
    it('should display 15 different categories', () => {
        render(<Categories/>, {wrapper: BrowserRouter})
        expect(screen.getAllByRole('heading', {level: 2})).toHaveLength(15)
    })

    it('should show The Dark Knight in 3 different categories', () => {
        render(<Categories/>, {wrapper: BrowserRouter})
        expect(screen.getAllByText('The Dark Knight')).toHaveLength(3)
    })

    it('should show The Shawshank Redemption only one time', () => {
        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument()
    })
})