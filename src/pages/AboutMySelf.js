import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import BasicText from '../components/BasicText';
import { aboutMySelfDescription } from '../constants/Texts';
import { MARGIN_FROM_TEXT_TO_TITLE_SIZE } from '../constants/Sizes';
import StyledSpan from '../components/StyledSpan';


const AboutMySelf = () => (
    <CenteredContainer id={'AboutMySelf'}>
        <BasicText isTitle={true} text={'Little bit about myself'} />
        <StyledSpan marginTop={MARGIN_FROM_TEXT_TO_TITLE_SIZE}>
            <BasicText text={aboutMySelfDescription} />
        </StyledSpan>
    </CenteredContainer>
);

export default AboutMySelf;