import React, { useState } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import './index.css'
import Jobs_pt from "./pages/jobs_pt.tsx";
import Jobs_en from "./pages/jobs_en.tsx"; 
import Jobs_info_all from "./pages/jobs_info.all.tsx"; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Jobs_pt />,
  },
  {
    path: "/pt",
    element: <Jobs_pt />,
  },
  {
    path: "/en",
    element: <Jobs_en/>,
  },
  {
    path: "/all",
    element: <Jobs_info_all />,
  },
]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
