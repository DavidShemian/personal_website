import React from 'react';
import styled from 'styled-components';

const StyledSpan = ({children, margin}) => {
    return (<Span margin={margin}>
        {children}
    </Span>)
};

const Span = styled.span`
    margin: ${props => props.margin};
`

export default StyledSpan