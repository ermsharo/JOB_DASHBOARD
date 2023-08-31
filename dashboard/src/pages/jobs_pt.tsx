
import styled from "styled-components";
import { Button, Paper, Stack, Typography } from "@mui/material";
import Header from "./../components/header";
import JobsInfo from "../components/JobInfo";
const JobInfo = styled.div`
padding: 3rem 3rem;


`

const Description = styled.div`

font-size: 1.2rem;
`

const TextInfo = styled.div`
padding: 1rem 0;


`
const DisplayJob = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 1rem;
grid-row-gap: 2rem;

`

const OptionsGroup = styled.div`
padding: 3rem 1rem;


`;

const DashboardBox = styled.div`
padding: 3rem 3rem;
width: 80vw;
margin: auto;


`




function JobsInfo_pt() {

    return (
<><Header/>
<DashboardBox><JobsInfo/></DashboardBox>

</>

    );

}

export default JobsInfo_pt;

