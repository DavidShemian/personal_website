import React from 'react';
import styled from 'styled-components';

const ButtonImage = () => {
    return <Container>
        <Button>
        <Icon src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png' />
        </Button>
    </Container>
}

const Icon = styled.img`
    width: 21px; 
    height: 21px;
`;

const Button = styled.button``;

const Container = styled.div``;

export default ButtonImage;