import styled from 'styled-components';
import React from 'react';
import { DESCRIPTION_FONT_SIZE, TITLE_FONT_SIZE, SCALED_TITLE_FONT_SIZE } from '../constants/Sizes';

const BasicText = ({ text, fontSize, fontStyle, isTitle, color, isP, marginTop, fontWeight }) => {
  if (isP) {
    return <Span color={color} fontSize={fontSize} fontWeight={fontWeight} fontStyle={fontStyle}>{text}</Span>
  }

  const lines = text.split('\n');
  const toRender = lines.map((line, i) => {
    return <Span isTitle={isTitle} color={color} fontSize={fontSize} fontWeight={fontWeight} fontStyle={fontStyle} key={i} marginTop={marginTop}>{line}</Span>

  });

  return (<Container>
    {toRender}
  </Container>)
}

const Container = styled.div``;

const Span = styled.span`
  white-space: pre-line;
  font-size: ${props => props.fontSize ? props.fontSize : props.isTitle ? TITLE_FONT_SIZE : DESCRIPTION_FONT_SIZE};
  color: ${props => props.color ? props.color : '#000000'};
  font-style: ${props => props.fontStyle ? props.fontStyle : 'none'};
  font-family: ${props => props.isTitle ? 'Playfair Display' : 'Roboto'};
  font-weight: ${props => props.fontWeight ? props.fontWeight : 'none'};
  margin-top: ${props => props.marginTop};
  @media screen and(max-width: 480px){
    font-size: ${
  props => props.isTitle ? SCALED_TITLE_FONT_SIZE :
    props.fontSize ? props.fontSize : DESCRIPTION_FONT_SIZE
  };
}
`;

export default BasicText;
