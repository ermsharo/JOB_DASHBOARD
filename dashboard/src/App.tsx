import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import styled from 'styled-components'


const DashboardBox = styled.button`
width: 60vw;
margin: auto; 
padding: 1rem; 

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
