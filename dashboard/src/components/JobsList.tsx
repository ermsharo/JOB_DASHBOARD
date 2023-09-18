import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { postData } from '../services/request';

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


const invalidateJob = async (id: number) => {
    let body = {
        id: id
    };
    console.log("Body here", body)
    let url = 'http://127.0.0.1:5000/remove';
    if (await postData(body, url)) {
        console.log("Deu certo")
    } else {
        console.log("Deu errado")
    }

};



export default function BasicTable({ data }: { data: any }) {
    const { job_records } = data;
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
                        id,
                        job_type,
                        language,
                        title,
                        valid
                    }: JobListing) => (
                        <TableRow
                            key={id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="right">{title}</TableCell>
                            <TableCell align="right">{company}</TableCell>
                            <TableCell align="right">{job_type}</TableCell>
                            <TableCell align="right">{language}</TableCell>
                            <TableCell align="center"><>Aplicar</></TableCell>
                            <TableCell align="right"> <IconButton aria-label="delete" onClick={async () => { await invalidateJob() }}>
                                <DeleteIcon />
                            </IconButton></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
