import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Page from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Page /> },
      { path: "/page/:id", element: <Page /> },
    ],
  },
  {
    path: "*",
    element: <App />,
    children: [{ path: "*", element: <Page /> }],
  },
]);
