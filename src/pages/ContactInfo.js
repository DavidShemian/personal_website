import React from 'react';
import BasicText from '../components/BasicText';
import CenteredContainer from '../components/CenteredContainer'
import { BasicTitle } from '../components/BasicTitle'
import { SECONDARY_WHITE } from '../constants/colors';
import Logo from '../components/Logo';
import styled from 'styled-components';

const ContactInfo = () => (
    <CenteredContainer backgroundColor={SECONDARY_WHITE} id={'ContactInfo'}>
        <BasicTitle>
            I would love to hear from you!
        </BasicTitle>
        <CenteredContainer marginTop={'10px'}>
            <BasicText>
                +972543151790
        </BasicText>
            <BasicText>
                davidshemian18@gmail.com
        </BasicText>
            <Link href="https://www.linkedin.com/in/david-shemian-191904159/"  target="_blank">
            <Logo src={'https://i.ibb.co/bRT1XLn/linkedin-icon-png-4.png'} width={'30px'} hight={'30px'}/>
            </Link>
        </CenteredContainer>

    </CenteredContainer>
);

const Link = styled.a``;

export default ContactInfo;