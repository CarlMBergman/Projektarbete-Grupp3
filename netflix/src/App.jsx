import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmView from "./views/FilmView/FilmView";
import Favourites from "./views/Favourites/Favourites";
import Categories from "./views/Categories/Categories";
import Home from "./views/Home/Home";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/Projektarbete-Grupp3/",
    element: <Home />,
  },
  {
    path: "/Projektarbete-Grupp3/FilmView",
    element: <FilmView />,
  },
  {
    path: "/Projektarbete-Grupp3/Favourites",
    element: <Favourites />,
  },
  {
    path: "/Projektarbete-Grupp3/Categories",
    element: <Categories />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
