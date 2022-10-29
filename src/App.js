
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Main'
import Home from './Components/Home'
import Search from './Components/Search'
import About from './Components/About'

function App() {
  const router =createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/search',
          element: <Search></Search>
        },
        {
          path: '/about',
          element: <About></About>
        }
      ]
    }
  ])
  return (
    <RouterProvider router ={router}></RouterProvider>
  );
}

export default App;
