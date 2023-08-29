import { useState } from 'react'
import styled from 'styled-components'


const DashboardBox = styled.div`
width: 60vw;
margin: auto; 
padding: 1rem; 
display: flex;
justify-content: center;
padding-top: 3rem;

`

import Header from "./components/header"
import JobsList from "./components/JobsList"
import JobsData from './dataServices/jobsData'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <DashboardBox>
      {/* <JobsList/> */}
      <JobsData />
      </DashboardBox>
  
    </>
  )
}

export default App
