
import styled from "styled-components";
import Header from "./../components/header";
import JobsInfo from "../components/JobInfo";
import JobsDisplay from "../components/JobsDisplay"




const DashboardBox = styled.div`
padding: 8rem 3rem;

margin: auto;


`






function JobsInfo_pt() {

    //Vamos modificar as coisas aqui usando o use context
    
    //Vou precisar dos seguinte parametros

    //Page

    //Language

    //Easy apply

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

