import React from 'react';
import styled from 'styled-components';

const LinkedinIcon = () => {
    return <div>
        <button>
        <Icon src='https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png' />
        </button>
    </div>
}

const Icon = styled.img`
    width: 21px; 
    height: 21px;
`;

export default LinkedinIcon;