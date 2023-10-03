import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Header from "../components/header/Header";
import App from "../App";

describe('testing our header', () => {
    it('should show header', () => {
        render(<Header/>)
        
        expect(screen.getByText("Nettan")).toBeInTheDocument();
    })
    it('should be able to search for a movie', async () => {
        render(<App/>)
        const input = screen.getByRole('textbox')
        await userEvent.type(input, 'the shaw')

        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument()
    })
    it('should show navigate options when pressing the burger menu', async () => {
        render(<App/>)
        const burgerMenu = screen.getByTestId('burger')
        await userEvent.click(burgerMenu)

        expect(screen.getByText('CATEGORIES')).toBeInTheDocument()
    })
})
