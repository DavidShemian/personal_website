import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import BasicText from '../components/BasicText';
import { aboutMySelfDescription } from '../constants/Texts';
import TextContainer from '../components/TextContainer';


const AboutMySelf = () => (
    <CenteredContainer id={'AboutMySelf'}>
        <BasicText isTitle={true} text={'Little bit about myself'} />
        <TextContainer>
            <BasicText text={aboutMySelfDescription} isP/>
        </TextContainer>
    </CenteredContainer>
);

export default AboutMySelf;