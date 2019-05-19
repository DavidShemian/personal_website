import React from 'react';
import styled from 'styled-components';
import CenteredContainer from './CenteredContainer';

const Card = ({ src, title, dates, description }) => (
    <Container>
        <SquaredImage src={src} />
        <Title>
            {title}
        </Title>
        <Dates>
            {dates}
        </Dates>
        <Description>
            {description}
        </Description>
    </Container>
);

const SquaredImage = styled.img`
    height: 160px;
    width: 160px;
    border-radius: 25px;
`;

const Dates = styled.span`
    font-size: 18px;
`;

const Container = styled(CenteredContainer)`
    margin-top: 25px;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.span`
    font-style: italic;
    text-decoration: underline;
    font-size: 24px;
`;

const Description = styled.div`
  white-space: pre-wrap;
  `;

export default Card;
