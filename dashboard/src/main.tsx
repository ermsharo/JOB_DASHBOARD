import React from 'react'
import * as ReactDOM from "react-dom/client";
import App from './App.tsx'
import './index.css'
import { MyContextProvider } from "./context/Context.tsx"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Jobs_pt />,
//   },
//   {
//     path: "/pt",
//     element: <Jobs_pt />,
//   },
//   {
//     path: "/en",
//     element: <Jobs_en/>,
//   },
//   {
//     path: "/all",
//     element: <Jobs_info_all />,
//   },
// ]);




ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MyContextProvider>
      <App />
    </MyContextProvider>
  </React.StrictMode>,
)
