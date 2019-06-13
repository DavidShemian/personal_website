import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import styled from 'styled-components';
import Logo from '../components/Logo';
import BasicText from '../components/BasicText';
import { SECONDARY_WHITE, MAROON } from '../constants/Colors';
import { JAVA_SCRIPT_DESCRIPTION, NODE_JS_DESCRIPTION, REACT_DESCRIPTION } from '../constants/Texts';
import TextContainer from '../components/TextContainer';


const Abilities = () => (
    <CenteredContainer id={'Abilities'} backgroundColor={SECONDARY_WHITE}>
        <BasicText text={'What I know to do'} isTitle={true} />
        <LogoContainer>
            <Logo src={'https://i.ibb.co/9WQxxN1/javascript.png'} />
            <Logo src={'https://i.ibb.co/SmdyWTZ/node.png'} />
            <Logo src={'https://i.ibb.co/GMydpKZ/react.png'} />
            <Logo src={'https://i.ibb.co/prHTgVJ/java.png'} />
            <Logo src={'https://i.ibb.co/CHjBdvS/C.png'} />
            <Logo src={'https://i.ibb.co/yy0wYHF/HTML5.png'} />
            <Logo src={'https://i.ibb.co/QnbqdsR/CSS.png'} />
        </LogoContainer>
        <AbilityDescription coloredText='Javascript - ' text={JAVA_SCRIPT_DESCRIPTION} />
        <AbilityDescription coloredText='Node js - ' text={NODE_JS_DESCRIPTION} />
        <AbilityDescription coloredText='React - ' text={REACT_DESCRIPTION} />
    </CenteredContainer>
);

interface IAbilityDescription {
    coloredText: string,
    text: string
}

const AbilityDescription = ({ coloredText, text }: IAbilityDescription) => (
    (<TextContainer>
        <BasicText text={coloredText} color={MAROON} fontWeight={"bold"} isP />
        <BasicText text={text} isP />
    </TextContainer>)
);

const LogoContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items:flex-start;
    overflow-x: auto;
    margin-left: 3vw;
    margin-right: 3vw;
    margin-top: 2vh;
`;

export default Abilities;