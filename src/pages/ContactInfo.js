import React from 'react';
import BasicText from '../components/BasicText';
import CenteredContainer from '../components/CenteredContainer'
import { SECONDARY_WHITE } from '../constants/Colors';
import { PHONE_NUMBER, EMAIL } from '../constants/Texts';
import { LINKEDIN_PROFILE, LINKEDIN_LOGO } from '../constants/URL';
import LinkedImage from '../components/LinkedImage';
import { MARGIN_FROM_TEXT_TO_TITLE_SIZE } from '../constants/Sizes';
import StyledSpan from '../components/StyledSpan';

const ContactInfo = () => (
    <CenteredContainer backgroundColor={SECONDARY_WHITE} id={'ContactInfo'}>
        <BasicText text={'I would love to hear from you!'} isTitle={true} />
        <StyledSpan marginTop={MARGIN_FROM_TEXT_TO_TITLE_SIZE}>
            <BasicText text={PHONE_NUMBER} />
            <BasicText text={EMAIL} />
        </StyledSpan>
        <LinkedImage href={LINKEDIN_PROFILE} src={LINKEDIN_LOGO} width={'8vh'} hight={'8vh'} />
    </CenteredContainer>
);


export default ContactInfo;