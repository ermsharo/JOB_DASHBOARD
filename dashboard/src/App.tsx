import { useState } from 'react'
import styled from 'styled-components'


const DashboardBox = styled.div`
width: 60vw;
margin: auto; 
padding: 1rem; 
display: flex;
justify-content: center;

`

import Header from "./components/header"
import JobsList from "./components/Jobs_list"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <DashboardBox>
      <JobsList/>
      </DashboardBox>
  
    </>
  )
}

export default App
