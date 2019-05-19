import React from 'react';
import styled from 'styled-components';
import { BasicText } from '../components/BasicText';

const Welcome = () => {
    return <Container>
        <BasicText>
            <HelloDiv>
                Hey, I'm David Shemian
            </HelloDiv>
            <SecondLine>
                Full stack developer from Israel
            </SecondLine>
        </BasicText>
    </Container>
}

const innerHeight = window.innerHeight + 'px';

const Container = styled.div`
background-image: url(https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260);
height: ${innerHeight}; 
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const HelloDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 32px;
font-style: italic;
`;

const SecondLine = styled.div`
    font-size: 54px;
    font-weight: bold;
`;

export default Welcome;

