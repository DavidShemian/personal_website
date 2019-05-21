import styled from 'styled-components';

export const BasicTitle = styled.span`
    color: ${props => props.color ? props.color : '#000000'};
    font-family: 'brandon grotesque', 'Raleway';
    font-size: ${props => props.fontSize ? props.fontSize : '54px'};
`;