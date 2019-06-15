import React from 'react';
import CenteredContainer from '../components/CenteredContainer';
import Card from '../components/Card';
import { SMALL_RUMBLE_DESCRIPTION, IDC_DESCRIPTION } from '../constants/Texts';
import BasicText from '../components/BasicText';


const PastWork = () => (
    <CenteredContainer id={'PastWork'}>
        <BasicText text={`What I've been up to`} isTitle />
        <Card
            src='http://www.mnews.co.il/upload/1503476102.png'
            name='Rumble'
            title='Fullstack engineer'
            dates='01.03.2018 - present'
            text={SMALL_RUMBLE_DESCRIPTION}
        />
        <Card
            src='https://i.ibb.co/Z2Yg03R/IDC-logo-White-svg.png'
            name='IDC'
            title='Computer science student'
            dates='01.11.2017 - 01.09.2019'
            text={IDC_DESCRIPTION}
        />
    </CenteredContainer>
);

export default PastWork;