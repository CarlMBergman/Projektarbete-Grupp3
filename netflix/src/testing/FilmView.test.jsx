/* import FilmView from "../views/FilmView/FilmView";
import { render, screen, waitFor } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';







it('should render film correctly' , () => {

render(<FilmView/>);

const filmTitle = screen.getByText('The Shawshank Redemption')
const filmImg = screen.getByAltText('Bild');
const filmGenre = screen.getByText('Genre: Drama')
const filmActors = screen.getByText('Actors: Tim Robbins, Morgan Freeman, Bob Gunton')
const filmRating = screen.getByText('Rating: R')
const filmYear = screen.getByText('Year: 1994')
const filmSynopsis = screen.getByText('Synopsis')
const filmSynopsisP = screen.getByText('Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.')
const filmButton = screen.getByText('Add to favorite');

expect(filmTitle).toBeInTheDocument();
expect(filmImg).toBeInTheDocument();
expect(filmGenre).toBeInTheDocument();
expect(filmActors).toBeInTheDocument();
expect(filmRating).toBeInTheDocument();
expect(filmYear).toBeInTheDocument();
expect(filmSynopsis).toBeInTheDocument();
expect(filmSynopsisP).toBeInTheDocument();
expect(filmButton).toBeInTheDocument();

})


it('should adds film to favorites when "Add to favorite" button is clicked', async () => { // Lägg till "async" här
    render(<FilmView />);

    // Kontrollera att meddelandet inte finns initialt
    expect(screen.queryByText(/This film is in your favorites/i)).toBeNull();

    // Klicka på "Add to favorite" knappen med userEvent
    userEvent.click(screen.getByText(/Add to favorite/i));

    // Använd waitFor för att avvakta att meddelandet visas
    await waitFor(() => {
      expect(screen.getByText(/Added to favorite/i)).toBeInTheDocument();
    });
  });


it('should not display "This film is in your favorites" initially', () => {
    const { queryByText } = render(<FilmView />);

    // Kontrollera att meddelandet inte finns initialt
    expect(queryByText('Added to favorite')).toBeNull();
  });

 */