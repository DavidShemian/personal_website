import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';

const LinkedImage = ({href, width, hight}) => {
    return <Link href={href} target="_blank">
        <Logo src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png' width={width} hight={hight}/>
    </Link>
}

const Link = styled.a``;

export default LinkedImage;