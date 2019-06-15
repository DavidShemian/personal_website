import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import BasicText from './BasicText';
import { MAROON, OLIVE, TEAL } from '../constants/Colors';

interface CardProps {
    src: string,
    name: string,
    title: string,
    dates: string,
    text: string
}

const Card = ({ src, name, title, dates, text }: CardProps) => {
    return (<Container>
        <SquaredImage src={src} />
        <TextContainer>
            <BasicText text={name} color={MAROON} fontWeight={'bold'} />
            <BasicText text={title} color={OLIVE} fontWeight={'bold'} />
            <BasicText text={dates} color={TEAL} fontWeight={'bold'} />
            <BasicText text={text} isP />
        </TextContainer>
    </Container>)
}

const SquaredImage = styled.img`
    object-fit: cover;  
    width: 300px;
    height: 250px;
    border-radius: 30px;
`;

const TextContainer = styled.div`
    margin-left: 3vw;
    @media screen and (max-width: 1400px){
        margin-top: 2vh;
    }  
    @media screen and (max-width: 400px){
        margin-left: 0vw;
    }  
`;

const Container = styled(CenteredContainer)`
        flex-direction: row;
        justify-content: flex-start; 
        align-items: center;
        width: 100%;
        min-width: 300px;
        width: 60vw; 
        margin-top: 6vh;
        @media screen and (max-width: 1000px){
            flex-direction: column;
        }

`;
export default Card;
