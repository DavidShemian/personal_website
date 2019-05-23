import React from 'react';
import styled from 'styled-components';
import video from '../videos/Typing-on-Keyboard-of-MacBook-Pro.mp4'
import BasicText from '../components/BasicText';



const Welcome = () => {
    return <Container id={'Welcome'}>
        <Text>
            {`Hey, I'm David Shemian
                Full stack developer from Israel`}
        </Text>
        <VideoContainer>
            <Video autoPlay>
                <Source src={video} type="video/mp4" />
            </Video>
        </VideoContainer>
    </Container>
}

const innerHeight = window.innerHeight + 'px';

const Container = styled.div`
        /* background-image: url(https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260); */
        height: ${innerHeight}; 
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        overflow:hidden;    
        position:relative;
        /* background-color: green; */
        `;

const Video = styled.video``;
const Source = styled.source``;

const Text = styled(BasicText)`
    top:0;  
    left:0;
    z-index:100;
    background-color: blue;
`;

const VideoContainer = styled.div`
    /* position:relative;
    top:0; 
    left:0; */

`;

export default Welcome;