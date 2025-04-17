import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './App.css'
import { Home } from "./components/Home";
import { About } from "./components/About";
import { AppLayout } from "./UI/AppLayout";
import { Contact } from "./components/Contact/Contact";



const router = createBrowserRouter([
  {
    path: '/',
    element : <AppLayout />,
    children :[{
      path: '/',
      element: <Home />,
    },
    {
      path : '/about',
      element : <About />,
    },
    {
      path : '/contact',
      element : <Contact />,
    }]
  }


])

function App() {

  return <RouterProvider router={router}></RouterProvider>
}

export default App
