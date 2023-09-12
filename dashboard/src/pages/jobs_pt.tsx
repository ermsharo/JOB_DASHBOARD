
import styled from "styled-components";
import { Button, Paper, Stack, Typography } from "@mui/material";
import Header from "./../components/header";
import JobsInfo from "../components/JobInfo";
import JobsDisplay from "../components/JobsDisplay"




const DashboardBox = styled.div`
padding: 8rem 3rem;

margin: auto;


`




function JobsInfo_pt() {

    return (
        <><Header />
            <DashboardBox

            >
                <JobsDisplay />
            </DashboardBox>

        </>

    );

}

export default JobsInfo_pt;

