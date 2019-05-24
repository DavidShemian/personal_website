import styled from 'styled-components';
import React from 'react';
import { DESCRIPTION_FONT_SIZE } from '../constants/Sizes';

const BasicText = ({ text, fontSize, fontStyle }) => {
  const lines = text.split('\n');
  const toRender = lines.map((line, i) => {
    return <Span fontSize={fontSize} fontStyle={fontStyle} key={i}>{line}</Span>
  });

  return (<Container>
    {toRender}
  </Container>)
}

const Container = styled.div`
display: flex;
flex-direction: column; 
justify-content: center;
align-items: center;
`;

const Span = styled.span`
  font-size: ${props => props.fontSize ? props.fontSize : DESCRIPTION_FONT_SIZE};
  color: ${props => props.color ? props.color : '#000000'};
  font-style: ${props => props.fontStyle ? props.fontStyle : 'none'};
  font-family:'Playfair Display', 'Roboto', 'brandon grotesque', 'Raleway';
  `;

export default BasicText;
