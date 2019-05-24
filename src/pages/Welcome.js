import React from 'react';
import styled from 'styled-components';
import video from '../videos/Productive-Morning.mp4'
import BasicText from '../components/BasicText';
import { TITLE_FONT_SIZE } from '../constants/Sizes';



const Welcome = () => {
    return <Container id={'Welcome'} backgroundColor={'green'}>
        <Text fontSize={TITLE_FONT_SIZE}
            text={`Hey, I'm David Shemian
            Full stack developer from Israel`}
        >
        </Text>
            <Video autoPlay loop>
                <Source src={video} type="video/mp4" />
            </Video>
    </Container>
}

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Video = styled.video`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;  
    position: absolute; 
`;
const Source = styled.source``;

const Text = styled(BasicText)`
text-align: center;
vertical-align: middle;
opacity: 0.8;
`;

export default Welcome;