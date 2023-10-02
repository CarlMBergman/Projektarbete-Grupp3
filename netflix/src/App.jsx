import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./views/Home/Home";
import FilmView from "./views/FilmView/FilmView";
import Favourites from "./views/Favourites/Favourites";
import Categories from "./views/Categories/Categories";
import "./App.css";
import HomePage from "./components/Home/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/FilmView",
    element: <FilmView />,
  },
  {
    path: "/Favourites",
    element: <Favourites />,
  },
  {
    path: "/Categories",
    element: <Categories />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <HomePage />
    </div>
  );
}

export default App;
