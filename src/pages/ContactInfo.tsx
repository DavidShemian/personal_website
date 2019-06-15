import React from 'react';
import BasicText from '../components/BasicText';
import CenteredContainer from '../components/CenteredContainer'
import { SECONDARY_WHITE } from '../constants/Colors';
import { PHONE_NUMBER, EMAIL } from '../constants/Texts';
import { LINKEDIN_PROFILE, LINKEDIN_LOGO } from '../constants/URL';
import LinkedImage from '../components/LinkedImage';
import { MARGIN_FROM_TEXT_TO_TITLE_SIZE } from '../constants/Sizes';

const ContactInfo = () => (
    <CenteredContainer backgroundColor={SECONDARY_WHITE} id={'ContactInfo'}>
        <BasicText text={`I would love to hear`} isTitle={true} />
        <BasicText text={`from you!`} isTitle={true} />
            <CenteredContainer marginTop={MARGIN_FROM_TEXT_TO_TITLE_SIZE}>
            <BasicText text={PHONE_NUMBER} />
            <BasicText text={EMAIL} />
            </CenteredContainer>
        <LinkedImage href={LINKEDIN_PROFILE} src={LINKEDIN_LOGO} width={'30px'} height={'30px'} />
    </CenteredContainer>
);


export default ContactInfo;