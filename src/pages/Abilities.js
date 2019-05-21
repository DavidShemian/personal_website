import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import { BasicTitle } from "../components/BasicTitle";
import styled from 'styled-components';
import Logo from '../components/Logo';
import BasicText from '../components/BasicText';
import { SECONDARY_WHITE } from '../constants/colors';


const Abilities = () => (
    <CenteredContainer id={'Abilities'} backgroundColor={SECONDARY_WHITE}>
        <BasicTitle color='#000000'>
            What I know to do
        </BasicTitle> 
        <LogoContainer>
            <Logo src={'https://i.ibb.co/9WQxxN1/javascript.png'} />
            <Logo src={'https://i.ibb.co/SmdyWTZ/node.png'} />
            <Logo src={'https://i.ibb.co/GMydpKZ/react.png'} />
            <Logo src={'https://i.ibb.co/prHTgVJ/java.png'} />
            <Logo src={'https://i.ibb.co/CHjBdvS/C.png'} />
            <Logo src={'https://i.ibb.co/yy0wYHF/HTML5.png'} />
            <Logo src={'https://i.ibb.co/QnbqdsR/CSS.png'} />
        </LogoContainer>
        <BasicText>
            {`
            Javascript - Highly skilled. Worked with javascript for a year and a half, and always looking  to learn more about the language.
            
            Node - Highly skilled. Worked with javascript for a year and a half, and always looking  to learn more about the language.
            `}
        </BasicText>
    </CenteredContainer>
);

const LogoContainer = styled.div``;

export default Abilities;