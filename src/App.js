import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Home from "./Components/Home";
import Meals from "./Components/Meals";
import About from "./Components/About";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/meals",
          element: <Meals></Meals>,
        },
        {
          path: "/meals/:id",
          element: <Meals></Meals>,
          loader: ({ params }) =>
            fetch(
              `https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.id}`
            ),
        },
        {
          path: "/about",
          element: <About></About>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
