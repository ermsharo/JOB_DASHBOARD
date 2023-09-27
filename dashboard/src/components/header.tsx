
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import styled from 'styled-components';
import { useMyContext } from '../context/Context';



const Links = styled.div`
padding: 2rem 1rem;

a{
    text-decoration: none;  
    color: white;
}


`




function ResponsiveAppBar() {


    const { setNavigation, setLanguage, setPerPage, setPage } = useMyContext();

    const goToJOBS_PT = () => {
        setNavigation("JOBS_PT");
        setLanguage("pt");
        setPerPage(1);
        setPage(1);

    }
    const goToJOBS_EN = () => {
        setNavigation("JOBS_EN");
        setLanguage("en");
        setPerPage(1);
        setPage(1);
    }
    const goToJOBS_LIST_PT = () => {
        setNavigation("JOBS_LIST_PT");
        setLanguage("pt");
        setPerPage(20);
        setPage(1);
    }
    const goToJOBS_LIST_EN = () => {
        setNavigation("JOBS_LIST_EN");
        setLanguage("en");
        setPerPage(20);
        setPage(1);
    }


    const pages = [
        { name: 'jobs 🇧🇷', run: goToJOBS_PT }
        , { name: 'jobs 🇺🇲', run: goToJOBS_EN },
        { name: 'all jobs 🇧🇷', run: goToJOBS_LIST_PT },
        { name: 'all jobs 🇺🇲', run: goToJOBS_LIST_EN }];



    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {pages.map((page) => (
                        <Links key={page.name} onClick={page.run}>



                            <Typography
                                variant="h6"

                            >       {page.name}
                            </Typography>


                        </Links>
                    ))}





                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
