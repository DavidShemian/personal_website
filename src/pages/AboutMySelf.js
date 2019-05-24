import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import BasicText from '../components/BasicText';
import { aboutMySelfDescription } from '../constants/Texts';
import { TITLE_FONT_SIZE } from '../constants/Sizes';


const AboutMySelf = () => (
    <CenteredContainer id={'AboutMySelf'}>
        <BasicText fontSize={TITLE_FONT_SIZE} text={'Little bit about myself'}/>
        <BasicText text={aboutMySelfDescription} />
    </CenteredContainer>
);

export default AboutMySelf;