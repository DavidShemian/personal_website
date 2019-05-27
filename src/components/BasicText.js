import styled from 'styled-components';
import React from 'react';
import { DESCRIPTION_FONT_SIZE, TITLE_FONT_SIZE, SCALED_TITLE_FONT_SIZE } from '../constants/Sizes';

const BasicText = ({ text, fontSize, fontStyle, isTitle, color, isP, marginTop }) => {
  if(isP){
    return <Span color={color} fontSize={fontSize} fontStyle={fontStyle}>{text}</Span>
  }
  
  const lines = text.split('\n');
  const toRender = lines.map((line, i) => {
    return <Span isTitle={isTitle} color={color} fontSize={fontSize} fontStyle={fontStyle} key={i} marginTop={marginTop}>{line}</Span>

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
  font-size: ${props => props.fontSize ? props.fontSize : props.isTitle ? TITLE_FONT_SIZE : DESCRIPTION_FONT_SIZE};
  color: ${props => props.color ? props.color : '#000000'};
  font-style: ${props => props.fontStyle ? props.fontStyle : 'none'};
  font-family: ${props => props.isTitle ? 'Playfair Display' : 'Roboto'};
  margin-top: ${props => props.marginTop};
  @media screen and(max-width: 480px){
    font-size: ${
    props => props.isTitle ? SCALED_TITLE_FONT_SIZE :
    props.fontSize ? props.fontSize : DESCRIPTION_FONT_SIZE
  };
}
`;

export default BasicText;
