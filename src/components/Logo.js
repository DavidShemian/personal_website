import styled from 'styled-components';

const Logo = styled.img`
    src: 'url(${props => props.src})';
    width:  ${props => props.width ? props.width : '80px'};
    height: ${props => props.hight ? props.hight : '80px'};
    margin-top: 4vh;
    margin-bottom: 4vh;
`;

export default Logo;