
import styled from "styled-components";
import { Button, Paper, Stack, Typography } from "@mui/material";
import Header from "./../components/header";
import JobsInfo from "../components/JobInfo";




const DashboardBox = styled.div`
padding: 3rem 3rem;
width: 80vw;
margin: auto;


`

function JobsInfo_en() {

    return (
<><Header/>
<DashboardBox><JobsInfo/></DashboardBox>

</>

    );

}

export default JobsInfo_en;

