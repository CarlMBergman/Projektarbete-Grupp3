import FilmView from "../views/FilmView/FilmView";
import Favourites from "../views/Favourites/Favourites";
import Home from "../views/Home/Home";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { it, expect } from "vitest";
import { MemoryRouter, Routes, Route } from "react-router-dom";

/*
-------------------------     INFORMATION OM TESTERNA    ----------------------------------------------
 ---------------------------------------------------------------------------------------------------------------------
 Våran Slider/Caroulsel renderar ut filmerna flera gånger därav måste vi ha hänsyn till det i testerna.
 Så det är därför testerna kanske ser lite annorlunda ut.
 Därför använder vi oss av getAllByText i våra tester.
-----------------------------------------------------------------------------------------------------------------------
*/


it('should be able to click a movie', async () => {
  const entries = '/Projektarbete-Grupp3/'
  render(
      <MemoryRouter initialEntries={[entries]}>
          <Routes>
          <Route path='/Projektarbete-Grupp3/' element={<Home/>}/>
          <Route path='/Projektarbete-Grupp3/FilmView/' element={ <FilmView/> }/>
          </Routes>
      </MemoryRouter>)
  const psycho = screen.getAllByText('Psycho')
  await userEvent.click(psycho[0])
  expect(screen.getByText('Year: 1960')).toBeInTheDocument()
})



it('should be able to click on FavoriteBtn', async () => {
  const entries = '/Projektarbete-Grupp3/'
  render(
      <MemoryRouter initialEntries={[entries]}>
          <Routes>
          <Route path='/Projektarbete-Grupp3/' element={<Home/>}/>
          <Route path='/Projektarbete-Grupp3/FilmView/' element={ <FilmView/> }/>
          <Route path='/Projektarbete-Grupp3/Favourites/' element={ <Favourites/> }/>
          </Routes>
      </MemoryRouter>)
  const psycho = screen.getAllByText('Psycho')
  await userEvent.click(psycho[0])

      const favoBtn = screen.getByText('Save Movie')
       await userEvent.click(favoBtn);
       await userEvent.click(screen.getByTestId("burger"))
       await userEvent.click(screen.getAllByText("FAVOURITES")[0])
       expect(screen.getByText("Psycho"))

}) 


