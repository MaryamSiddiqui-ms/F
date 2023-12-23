import { useState } from "react";
import "./App.css";

import { Home, 
  Documentation, 
  GettingStarted,
  ZkDist,
  ZkSort,
  ZkMaxLabel,
  Examples,
  Tutorial
} from "./pages";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Sidebar } from "./components";
import links from "./statics/links";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/documentation",
    element: <Documentation />
  },
  {
    path: "/documentation/zkDist",
    element: <ZkDist />
  },
  {
    path: "/documentation/ZkSort",
    element: <ZkSort />
  },
  {
    path: "/documentation/ZkMaxLabel",
    element: <ZkMaxLabel />
  },
  {
    path: "/getting-started",
    element: <GettingStarted />
  },
  {
    path: "/examples",
    element: <Examples />
  },
  {
    path: "/tutorial",
    element: <Tutorial />
  },
  {
    path: "*",
    element: <Home />
  }

]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
