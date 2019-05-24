import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import BasicText from './BasicText';

const Card = ({ src, name, title, dates }) => (
    <Container>
        <SquaredImage src={src} />
        <TextContainer>
            <BasicText text={name}/>
            <BasicText text={title}/>
            <BasicText text={dates}/>
        </TextContainer>
    </Container>
);

const SquaredImage = styled.img`
    height: 100%;
    width: 30vw;
    border-radius: 3vh;
`;

const TextContainer = styled.div`
    margin-left: 10vh;
`

const Container = styled(CenteredContainer)`
        flex-direction: row;
        justify-content: flex-start; 
        align-items: flex-start;
        height: 20vh;
        width: 100%;
        margin-top: 6vh;
`;
export default Card;
