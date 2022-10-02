import React from "react";
import MainPage from "./pages";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SamplePage from "./pages/Sample";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/sample",
    element: <SamplePage />,
  },
]);
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
