import React from 'react';
import styled from 'styled-components';
import { Phone, Email } from '@material-ui/icons';
import LinkedinIcon from '../images/LinkedinIcon';

const ContactInfo = () => (
    <Container>
        How to reach me:
        <IconDiv>
            <Phone /> +972543151790
        </IconDiv>
        <IconDiv>
            <Email /> <a href="mailto:DavidShemian18@gmail.com">DavidShemian18@gmail.com</a>
        </IconDiv>
        <IconDiv>
            <LinkedinIcon /> <a href="https://www.linkedin.com/in/david-shemian-191904159/">click me</a>
        </IconDiv>
    </Container>
);

const Container = styled.div`
display: flex; 
flex-direction: row;
`;

const IconDiv = styled.div`
display: flex; 
flex-direction: row;
justify-content: center;
align-items: center;
margin-left: 250px;
`;

export default ContactInfo;