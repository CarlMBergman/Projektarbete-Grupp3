import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FilmView from "./views/FilmView/FilmView";
import Favourites from "./views/Favourites/Favourites";
import Categories from "./views/Categories/Categories";
import Home from "./views/Home/Home";
import "./App.css";

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
    </div>
  );
}

export default App;
