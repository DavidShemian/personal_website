import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import { BasicTitle } from "../components/BasicTitle";
import styled from 'styled-components';
import Card from '../components/Card';


const PastWork = () => (
    <Container id={'PastWork'}>
        <Text color='#000000'>
            What I've been up to
        </Text>
        <Card 
        src='http://www.mnews.co.il/upload/1503476102.png'
        title='Fullstack engineer'
        dates='01.03.2018 - present'
        text={`
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
        `}
        />
        <Card 
        src='https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/IDC_logo_White.svg/1200px-IDC_logo_White.svg.png'
        title='Computer science student'
        dates='01.11.2017 - 01.09.2019'
        text={`
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
       worked as a fullstack engineer using node and react
        `}
        />
    </Container>
);

const Container = styled(CenteredContainer)`
    margin-top: 45px;
    flex-direction: column;
    align-items: center;
`;

const Text = styled(BasicTitle)`
    /* text-decoration: underline; */
`;

export default PastWork;