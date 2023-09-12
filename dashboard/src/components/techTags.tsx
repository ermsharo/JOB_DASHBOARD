

import styled from "styled-components";
import Chip from "@mui/material/Chip";

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
const KeyWordsDisplay = styled.div`
display: flex;
gap: 1rem;
padding: 1rem 0rem;


`

const keywords = [
    // Programming Languages
    "JavaScript", "Python", "Ruby", "PHP", "Java", "C#", "TypeScript", "Go", "Swift", "Kotlin",
    // Front-end Frameworks
    "React", "Angular", "Vue.js", "Svelte", "Ember.js", "Backbone.js",
    // Back-end Frameworks
    "Node.js", "Express.js", "Flask", "Ruby on Rails", "Laravel", "Spring Boot", "ASP.NET", "Django",
    // Mobile App Frameworks
    "React Native", "Flutter", "Ionic",
    // Libraries and Tools
    "Redux", "jQuery", "Axios", "Bootstrap", "Material-UI", "Tailwind CSS", "Sass", "SCSS", "Less", "Webpack", "Parcel", "GraphQL",
    // Testing Frameworks
    "Jest", "Mocha", "Cypress", "Selenium",
    // Database Technologies
    "MySQL", "PostgreSQL", "MongoDB", "SQLite", "Redis", "Firebase",
    // DevOps and Deployment
    "Docker", "Kubernetes", "Jenkins", "Travis CI", "CircleCI", "AWS", "Azure", "Heroku", "Netlify",
    // Version Control
    "Git", "SVN",
    // APIs and Integrations
    "RESTful", "JSON", "SOAP",
    // Security
    "OAuth", "JWT", "SSL", "TLS",
    // Other Concepts
    "Responsive Design", "Progressive Web Apps", "Microservices", "Serverless"
];

function findKeywordsInText(text: string) {
    const foundKeywords = [];

    for (const keyword of keywords) {
        if (text.includes(keyword)) {
            foundKeywords.push(keyword);
        }
    }

    return foundKeywords;
}

const sampleText = "We are looking for a Full Stack Developer proficient in JavaScript, React, Node.js, and MongoDB.";
const foundKeywords = findKeywordsInText(sampleText);

console.log("Found keywords:", foundKeywords);


function TechTags({ description }: { description: string }) {

    console.log("Finded keywords here ", findKeywordsInText(description))
    let keywords = findKeywordsInText(description)

    return (



        <KeyWordsDisplay>
            {keywords.map((keyword) =>{
                return (<Chip label={keyword.toUpperCase()} color="primary" />)})}
        
            

        </KeyWordsDisplay >

    );

}

export default TechTags;

