import { useState } from 'react'
import styled from 'styled-components'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Router,
} from "react-router-dom";
import Header from "./components/header"
import JobsList from "./components/JobsList"
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
      <Header />
      <DashboardBox>      <BrowserRouter basename="/">
        <Routes>
          <Route path="/pt" element={<JobsData />} />
          <Route path="/" element={<JobsData />} />
          <Route path="/jobs" element={<JobsData />} />
          {/* 👈 Renders at /app/ */}
        </Routes>
      </BrowserRouter></DashboardBox>

    </>
  );


}


export default App
