import { useState } from "react";
import "./App.css";

import { Home, 
  Documentation, 
  GettingStarted,
  ZkDist,
  ZkSort,
  ZkMaxLabel,
  ZkTreeTraversal,
  ZkArgmax,
  Examples,
  KNN,
  DecisionTree,
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
    path: "/documentation/ZkTreeTraversal",
    element: <ZkTreeTraversal />
  },
  {
    path: "/documentation/ZkArgmax",
    element: <ZkArgmax />
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
    path: "/examples/KNN",
    element: <KNN />
  },
  {
    path: "/examples/DecisionTree",
    element: <DecisionTree />
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
