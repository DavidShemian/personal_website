import styled from 'styled-components';

export const BasicText = styled.span`
    color: ${props => props.color ? props.color : '#FFFF'};
    font-family: 'brandon grotesque', 'Raleway';
    font-size: ${props => props.fontSize ? props.fontSize : '54px'};
`;