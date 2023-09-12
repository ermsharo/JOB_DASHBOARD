

import { DefaultRequest } from "../services/request";
import JobsList from "./../components/JobsList";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import styled from "styled-components";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from "@mui/material/Button/Button";
import PT_jobs_data from "./../dataServices/PT_jobs_data";

const PaginationBox = styled.div`
padding: 2rem 1rem;
display: grid;
justify-content: end;

`

const DashboardBox = styled.div`
padding: 2rem 1rem;
display: grid;
grid-template-columns: 15% 70% 15%;


`
const ButtonBox = styled.div`

display: flex;
padding: 1rem;
justify-content: center;
flex-direction: column;


`


function JobsDisplay() {


    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const go_to_next_job = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage + 1);

        }
        console.log("NEXT JOB", currentPage)

    }
    const go_to_previous_job = (total_pages: number) => {
        if (currentPage < total_pages) {
            setCurrentPage(currentPage - 1);

        }
        console.log("PREVIOUS JOB", currentPage)

    }

    const updateTotalPages = (actual_pages_number: number) =>{
        if (actual_pages_number!= totalPages) {
            setTotalPages(actual_pages_number)
        }

    }




    return (
        <>      
        <>  {totalPages}</>
      
          <DashboardBox>
            <ButtonBox>   <Button variant="contained" startIcon={<ArrowCircleLeftIcon />} onClick={() => { go_to_previous_job(totalPages) }}>
                anterior
            </Button></ButtonBox>


            <div>
                <PT_jobs_data current={currentPage} updateTotalPages={updateTotalPages}  />
            </div>
            <ButtonBox> <Button variant="contained" endIcon={<ArrowCircleRightIcon />} onClick={() => { go_to_next_job() }}>
                proximo
            </Button></ButtonBox>


        </DashboardBox ></>

    );

}

export default JobsDisplay;

