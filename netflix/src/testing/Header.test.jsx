import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event'
import Header from "../components/header/Header";
import Home from "../views/Home/Home";
import App from '../App'
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import FilmView from "../views/FilmView/FilmView";


describe('testing our header', () => {
    it('should show header', () => {
        render(<Header/>)
        
        expect(screen.getByText("Nettan")).toBeInTheDocument();
    })
    it('should be able to search for a movie', async () => {
        render(<Header/>, {wrapper: BrowserRouter})
        const input = screen.getByRole('textbox')
        await userEvent.type(input, 'the shaw')

        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument()
    })
    it('should show navigate options when pressing the burger menu', async () => {
        render(<Header/>, {wrapper: BrowserRouter})
        const burgerMenu = screen.getByTestId('burger')
        await userEvent.click(burgerMenu)

        expect(screen.getByText('CATEGORIES')).toBeInTheDocument()
    })
})