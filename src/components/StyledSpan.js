import React from 'react';
import styled from 'styled-components';

const StyledSpan = ({children, marginTop}) => {
    return (<Span marginTop={marginTop}>
        {children}
    </Span>)
};

const Span = styled.span`
    margin-top: ${props => props.marginTop};
`

export default StyledSpan