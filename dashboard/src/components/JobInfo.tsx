
import { DefaultRequest } from "../services/request";
import JobsList from "./../components/JobsList";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import React, { useRef, useState } from 'react';
import styled from "styled-components";
import Iframe from 'react-iframe'
import IframeResizer from 'iframe-resizer-react'
import { Paper, Typography } from "@mui/material";

const JobInfo = styled.div`
padding: 3rem 3rem;


`

const Description = styled.div`


`

const TextInfo = styled.div`



`
const DisplayJob = styled.div`

display: grid;
grid-template-columns: 1fr 1fr;
grid-column-gap: 1rem;
grid-row-gap: 2rem;

`



let data = {
    "apply": false,
    "company": "Movere Software",
    "company_link": " - ",
    "date": " - ",
    "description": "About the job\n\nEstamos em busca de um Coordenador de Suporte que seja apaixonado e obcecado pelo sucesso do cliente; para alavancar o crescimento da empresa. Buscamos uma pessoa para coordenar o time de atendimento; treinando; supervisionando e melhorando o time continuamente. Também esperamos que este profissional lide com os donos e diretores de pequenas e médias empresas.\n\nO Coordenador de Suporte tem um papel fundamental na garantia da satisfação do cliente; na resolução de problemas técnicos e no desenvolvimento contínuo das melhores práticas da equipe.\n\n\n\n\nResponsabilidades\n\nAcompanhamento e priorização de atendimentos ao cliente\n\nRealização de comunicação ativa com os clientes\n\nGestão de pessoas e formação de time: contratação; feedback e treinamento de analistas de helpdesk\n\nAcompanhamento de indicadores dos times e individuais (FCR; SLA; Satisfação; Tempo médio de solução)\n\nManutenção e configuração das ferramentas de gestão de tickets (Freshdesk; Movidesk)\n\n\n\n\nQualificações\n\nExperiencia mínima de 1 ano coordenando time de suporte \n\nConhecimento de sistemas; softwares e soluções ERP\n\nSatisfação em conversar com os proprietários ou diretores de pequenas e médias empresas\n\nExperiência em atendimento ao cliente\n\nCapacidade de adaptação e jogo de cintura\n\n\n\n\nContratação é CLT Full + benefícios\n\nHorário de trabalho flexível\n\nA vaga é para Cuiabá-MT e atenderá clientes no Brasil inteiro",
    "id": 3680318273,
    "insights": "Full-time11-50 employeesSkills: Enterprise Resource Planning (ERP); Freshdesk; +1 moreJob poster joined LinkedIn in 2011",
    "job_type": "REMOTE",
    "language": "pt",
    "link": "https://www.linkedin.com/jobs/view/3703660637/",
    "location": " - ",
    "title": "Coordenador de suporte",
    "valid": true
}

const { apply, company, company_link, date, description, id, insights, job_type, link, title } = data

function JobsInfo() {

    return (
        <Paper elevation={3} >        <JobInfo>
            <div><Typography variant="h3">
                {title}
            </Typography></div>
<DisplayJob>     <TextInfo>       <Description>
                <Typography variant="h6" component="h6">
                    {description}
                </Typography>
            </Description></TextInfo></DisplayJob>

       
        </JobInfo>  </Paper>
    );

}

export default JobsInfo;

