import styled from 'styled-components';

const BasicText = styled.span`
  white-space: pre-wrap;
  font-size: ${props => props.fontSize ? props.fontSize : '20px'};
  color: ${props => props.color ? props.color : '#000000'};
  font-style: ${props => props.fontStyle ? props.fontStyle : 'none'};
  font-family: 'Roboto', 'brandon grotesque', 'Raleway';
  `;

export default BasicText;
