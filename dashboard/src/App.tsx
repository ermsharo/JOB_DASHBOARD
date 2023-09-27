import { useState } from 'react'
import styled from 'styled-components'
import { useMyContext } from './context/Context';
import Header from "./components/header";


const DashboardBox = styled.div`
width: 60vw;
margin: auto; 
padding: 1rem; 
display: flex;
justify-content: center;
padding-top: 3rem;

`

function App() {


  const {navigation} = useMyContext();


  

 const returnNavigation = () =>{

 }

  return (
    <>
     <Header/>
     {navigation}


  

    </>
  );


}


export default App
