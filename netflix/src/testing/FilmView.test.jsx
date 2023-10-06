 import FilmView from "../views/FilmView/FilmView";
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { test } from 'vitest';









/* 
const movie = {
  title: 'The Shawshank Redemption',
  genre: 'Drama',
  actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  rating: 'R',
  year: 1994,
  synopsis: 'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
}; */

test('Renders film information correctly', async () => {
  // Render the component
  render(<FilmView movie={movie} />);

  // Check that the film title is displayed
  const filmTitle = screen.getByText('The Shawshank Redemption');
  expect(filmTitle).toBeInTheDocument();

  // Check that the film genre is displayed
  const filmGenre = screen.getByText('Drama');
  expect(filmGenre).toBeInTheDocument();

  // Check that the film actors are displayed
  const filmActors = screen.getByText('Tim Robbins, Morgan Freeman, Bob Gunton');
  expect(filmActors).toBeInTheDocument();

  // Check that the film rating is displayed
  const filmRating = screen.getByText('R');
  expect(filmRating).toBeInTheDocument();

  // Check that the film year is displayed
  const filmYear = screen.getByText('1994');
  expect(filmYear).toBeInTheDocument();
});

test('Renders synopsis correctly', async () => {
  // Render the component
  render(<FilmView movie={movie} />);

  // Check that the synopsis is displayed
  const synopsis = screen.getByText(
    'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.'
  );
  expect(synopsis).toBeInTheDocument();
});

test('Renders "Add to favorite" button', async () => {
  // Render the component
  render(<FilmView movie={movie} />);

  // Check that the "Add to favorite" button is displayed
  const addToFavoriteButton = screen.getByText('Add to favorite');
  expect(addToFavoriteButton).toBeInTheDocument();
});



const movie = {
  title: 'The Shawshank Redemption',
  genre: 'Drama',
  actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
  rating: 'R',
  year: 1994,
  synopsis: null,
};

const fakeMovieService = jest.mock('movie-service');

test('Renders correctly when synopsis is null', async () => {
  // Mock the movie service
  fakeMovieService.getMovie.mockReturnValue(Promise.resolve(movie));

  // Render the component
  render(<FilmView movie={movie} />);

  // Check that the synopsis is not displayed
  expect(screen.queryByText('Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.')).toBeNull();
});

test('Renders correctly when synopsis is not null', async () => {
  // Mock the movie service
  fakeMovieService.getMovie.mockReturnValue(Promise.resolve({
    title: 'The Shawshank Redemption',
    genre: 'Drama',
    actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    rating: 'R',
    year: 1994,
    synopsis:
      'Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.',
  }));

  // Render the component
  render(<FilmView movie={movie} />);

  // Check that the synopsis is displayed
  expect(screen.getByText('Over the course of several years, two convicts form a friendship, seeking consolation and, eventually, redemption through basic compassion.')).toBeInTheDocument();
});



/* test('clicking "Add to favorite" button calls a function', () => {
  // Skapa en mockfunktion för den funktion som du vill testa
  const saveMovies = jest.fn();

  // Rendera din komponent med MemoryRouter
  render(
    <MemoryRouter>
      <FilmView />
    </MemoryRouter>,
    { wrapper: MemoryRouter }
  );

  // Hitta knappen med texten "Add to favorite" och klicka på den
  const addToFavoriteButton = screen.getByText('Add to favorite');
  fireEvent.click(addToFavoriteButton);

  // Kontrollera att din mockfunktion har blivit anropad när knappen klickades på
  expect(saveMovies).toHaveBeenCalled();
});

test('Testa att knappen lägger till i favoriter', () => {
  const mockAddToFavorites = jest.fn(); // Skapa en mockfunktion för att spåra anropet

  const movie = {
    // ... filmdata här
  };

  const { getByText } = render(<MovieComponent movie={movie} addToFavorites={mockAddToFavorites} />);

  const addToFavoritesButton = getByText('Add to favorite');

  fireEvent.click(addToFavoritesButton); // Simulera knappklick

  expect(mockAddToFavorites).toHaveBeenCalled(); // Verifiera att funktionen körs när knappen klickas på
});


