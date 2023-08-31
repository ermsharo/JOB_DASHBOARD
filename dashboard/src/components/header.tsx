
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const pages = [
    { name: 'jobs 🇧🇷', path: "/pt" }
    , { name: 'jobs 🇺🇲', path: "/en" },
    { name: 'all jobs', path: "/all" }];


const Links = styled.div`
padding: 2rem 1rem;


`


function ResponsiveAppBar() {


    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        HOME
                    </Typography>



                    {pages.map((page) => (
                        <Links key={page.name} >

                            <Link to={page.path}>{page.name}</Link>
                        </Links>
                    ))}





                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;
