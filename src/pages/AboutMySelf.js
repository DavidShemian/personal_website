import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import BasicText from '../components/BasicText';
import { aboutMySelfDescription } from '../constants/Texts';


const AboutMySelf = () => (
    <CenteredContainer id={'AboutMySelf'}>
        <BasicText isTitle={true} text={'Little bit about myself'}/>
        <BasicText text={aboutMySelfDescription} />
    </CenteredContainer>
);

export default AboutMySelf;