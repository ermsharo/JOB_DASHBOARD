import { useState } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import DisplayJob from "./components/DisplayJob"
import Header from "./components/header"
import JobsData from './dataServices/jobsData'


const DashboardBox = styled.div`
width: 60vw;
margin: auto; 
padding: 1rem; 
display: flex;
justify-content: center;
padding-top: 3rem;

`

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
  

    </>
  );


}


export default App
