import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Country } from "./Pages/Country";
import { Applayout } from "./Components/Layout.jsx/Applayout";
import { Errorpage } from "./Components/UI/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Errorpage/>,
    element: <Applayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "country",
        element: <Country />,
      },
    ],
  },
]);
const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
