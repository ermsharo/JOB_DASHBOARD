
import { DefaultRequest } from "../services/request";
import JobsList from "./../components/JobsList";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import styled from "styled-components";
import JobsInfo from "../components/JobInfo";


const PaginationBox = styled.div`
padding: 2rem 1rem;
display: flex;
justify-content: end;

`



function PT_jobs_data_list() {

    const [currentPage, setCurrentPage] = useState(1);

    //Maximum page

    //go to next page

    // Change handler for pagination
    const handlePageChange = (event: any, newPage: any) => {
        setCurrentPage(newPage);
        refetchData();

    };




    const { data, isLoading, refetchData  } = DefaultRequest<any>({
        url: `http://localhost:5000/jobs_by_language?page=${currentPage}&per_page=1`,
    });

    if (isLoading) {
        return <>loading</>;
    }

    if (data) {

  

        console.log("DATA HERE", data)
        return (
            <div>
                <JobsInfo data={data}/>
                <PaginationBox>
                    {/* Your content goes here */}
                    {/* <Pagination
                        count={data.total_pages} // Total number of pages
                        page={currentPage} // Current selected page
                        onChange={handlePageChange} // Handler function for page change
                        shape="rounded"
                    /> */}
                </PaginationBox>
            </div>
        );
    }
}

export default PT_jobs_data_list;

