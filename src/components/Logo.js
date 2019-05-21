import styled from 'styled-components';

const Logo = styled.img`
    src: 'url(${props => props.src})';
    width:  ${props => props.width ? props.width : '80px'};
    hight: ${props => props.hight ? props.hight : '80px'};
    onClick: ${props=> props.onClick};
`;

export default Logo;