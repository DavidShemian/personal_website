import styled from 'styled-components';

export const BasicTitle = styled.div`
    color: ${props => props.color ? props.color : '#000000'};
    font-family: 'Playfair Display', 'Raleway';
    font-size: ${props => props.fontSize ? props.fontSize : '54px'};
    font-style: ${props => props.fontStyle ? props.fontStyle : 'none'};
`;