import React from 'react';
import BasicText from '../components/BasicText';
import CenteredContainer from '../components/CenteredContainer'
import { SECONDARY_WHITE } from '../constants/Colors';
import { contactInfo } from '../constants/Texts';
import { LINKEDIN_PROFILE, LINKEDIN_LOGO } from '../constants/URL';
import LinkedImage from '../components/LinkedImage';

const ContactInfo = () => (
    <CenteredContainer backgroundColor={SECONDARY_WHITE} id={'ContactInfo'}>
        <BasicText text={'I would love to hear from you!'} isTitle={true} />
        <BasicText text={contactInfo} />
        <LinkedImage href={LINKEDIN_PROFILE} src={LINKEDIN_LOGO} width={'8vh'} hight={'8vh'} />
    </CenteredContainer>
);


export default ContactInfo;