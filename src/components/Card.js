import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';
import BasicText from './BasicText';

const Card = ({ src, title, dates, text }) => (
    <CenteredContainer  marginTop={'25px'}>
        <SquaredImage src={src} />
        <Title>
            {title}
        </Title>
        <Dates>
            {dates}
        </Dates>
        <BasicText>
            {text}
        </BasicText>
    </CenteredContainer>
);

const SquaredImage = styled.img`
    height: 160px;
    width: 160px;
    border-radius: 25px;
`;

const Dates = styled.span`
    font-size: 18px;
`;

const Title = styled.span`
    font-style: italic;
    text-decoration: underline;
    font-size: 24px;
`;


export default Card;
