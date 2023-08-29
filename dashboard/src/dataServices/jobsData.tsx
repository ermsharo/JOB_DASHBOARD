
import { DefaultRequest } from "../services/request";
import JobsList from "./../components/JobsList";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useState } from 'react';





function JobsListData() {

    const [currentPage, setCurrentPage] = useState(1);

    // Change handler for pagination
    const handlePageChange = (event: any, newPage: any) => {
        setCurrentPage(newPage);

    };




    const { data, isLoading } = DefaultRequest<any>({
        url: `http://127.0.0.1:5000/jobs`,
    });

    if (isLoading) {
        return <>loading</>;
    }

    if (data) {

        console.log("DATA HERE", data)
        return (
            <div>
                <JobsList data={data} />
                <div>
                    {/* Your content goes here */}
                    <Pagination
                        count={10} // Total number of pages
                        page={currentPage} // Current selected page
                        onChange={handlePageChange} // Handler function for page change
                        shape="rounded"
                    />
                </div>
            </div>
        );
    }
}

export default JobsListData;

