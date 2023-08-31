
import { DefaultRequest } from "../services/request";
import JobsList from "./../components/JobsList";
import Pagination from '@mui/material/Pagination';
import { useState } from 'react';
import styled from "styled-components";


const PaginationBox = styled.div`
padding: 2rem 1rem;
display: flex;
justify-content: end;

`



function JobsListData() {

    const [currentPage, setCurrentPage] = useState(0);

    //Maximum page

    //go to next page

    // Change handler for pagination
    const handlePageChange = (event: any, newPage: any) => {
        setCurrentPage(newPage);
        refetchData();

    };




    const { data, isLoading, refetchData  } = DefaultRequest<any>({
        url: `http://localhost:5000/jobs?page=${currentPage}&per_page=10`,
    });

    if (isLoading) {
        return <>loading</>;
    }

    if (data) {

        console.log("DATA HERE", data)
        return (
            <div>
                <JobsList data={data} />
                <PaginationBox>
                    {/* Your content goes here */}
                    <Pagination
                        count={data.total_pages} // Total number of pages
                        page={currentPage} // Current selected page
                        onChange={handlePageChange} // Handler function for page change
                        shape="rounded"
                    />
                </PaginationBox>
            </div>
        );
    }
}

export default JobsListData;

