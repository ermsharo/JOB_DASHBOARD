import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
type JobListing = {
    apply: boolean;
    company: string;
    company_link: string;
    date: string;
    description: string;
    id: number;
    insights: string;
    job_type: string;
    language: string;
    link: string;
    location: string;
    title: string;
    valid: boolean;
};


function createData(
    JobListing: JobListing
) {

    const {
        apply,
        company,
        company_link,
        date,
        description,
        id,
        insights,
        job_type,
        language,
        link,
        location,
        title,
        valid
    } = JobListing;
    return {
        apply,
        company,
        company_link,
        date,
        description,
        id,
        insights,
        job_type,
        language,
        link,
        location,
        title,
        valid
    };
}

const MarkedDisplay = (status: boolean) => {
    if (status) {
        return <>✅</>
    }
    return <>🔲</>
}

const ValidDisplay = (status: boolean) => {
    if (status) {
        return <>✅</>
    }
    return <>❌</>
}


export default function BasicTable({ data }: { data: any }) {
    const { job_records, total_pages } = data;
    console.log("Data here", data)
    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>

                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Company</TableCell>
                        <TableCell align="right">Job_type</TableCell>
                        <TableCell align="right">Language</TableCell>
                        <TableCell align="center">Applyed</TableCell>
                        <TableCell align="right">Valid</TableCell>
                        <TableCell align="right"> </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {job_records.map(({
                        apply,
                        company,
                        company_link,
                        date,
                        description,
                        id,
                        insights,
                        job_type,
                        language,
                        link,
                        location,
                        title,
                        valid
                    }) => (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="right">{title}</TableCell>
                            <TableCell align="right">{company}</TableCell>
                            <TableCell align="right">{job_type}</TableCell>
                            <TableCell align="right">{language}</TableCell>
                            <TableCell>{MarkedDisplay(apply)}</TableCell>
                            <TableCell align="right">{ValidDisplay(valid)}</TableCell>
                            <TableCell align="right"> <IconButton aria-label="delete">
                                <DeleteIcon />
                            </IconButton></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
