import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import BasicText from './BasicText';
import { BasicTitle } from './BasicTitle';

const Card = ({ src, name, title, dates, text }) => (
    <Container marginTop={'25px'}>
        <SquaredImage src={src} />
        <TextContainer>
            <BasicTitle fontSize={'24px'}>
                {name}
            </BasicTitle>
            <BasicText fontSize={'16px'}>
                {title}
            </BasicText>
            <BasicText fontSize={'16px'}>
                {dates}
            </BasicText>
            {/* <BasicText>
                {text}
            </BasicText> */}
        </TextContainer>
    </Container>
);

const SquaredImage = styled.img`
    height: 100%;
    width: 200px;
    border-radius: 25px;
`;

const TextContainer = styled.div`
    display:flex; 
    flex-direction: column;
    align-items: center;
    align-self: flex-start;
    justify-content: flex-start;
    max-width: 800px;
    margin-left: 50px;
`

const Container = styled(CenteredContainer)`
        flex-direction: row;
        justify-content: flex-start;
        width: 500px; 
        height: 200px;
        margin-top: 50px;
`
export default Card;
