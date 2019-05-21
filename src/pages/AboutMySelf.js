import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import { BasicTitle } from "../components/BasicTitle";
import styled from 'styled-components';
import BasicText from '../components/BasicText';


const AboutMySelf = () => (
    <Container id={'AboutMySelf'}>
        <BasicTitle color='#000000'>
            Little bit about myself
        </BasicTitle>
        <BasicText>
            {`
            Im am amazing!!!
            Im am amazing!!!
            Im am amazing!!!
            Im am amazing!!!
            Im am amazing!!!
            Im am amazing!!!
            Im am amazing!!!
            Im am amazing!!!
            Im am amazing!!!
            `}
        </BasicText>
    </Container>
);

const Container = styled(CenteredContainer)`
    margin-top: 45px;
    flex-direction: column;
    align-items: center; 
`;


export default AboutMySelf;