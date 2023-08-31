
import styled from "styled-components";
import { Button, Paper, Stack, Typography } from "@mui/material";
import Header from "./../components/header";
import JobsData from "../dataServices/jobsData";


const DashboardBox = styled.div`
padding: 3rem 3rem;
width: 80vw;
margin: auto;


`

function JobsInfo_all() {

    return (
        <><Header />
            <DashboardBox><JobsData /></DashboardBox>

        </>

    );

}

export default JobsInfo_all;

