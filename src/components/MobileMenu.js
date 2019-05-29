import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import NavBarLink from "./NavBarLink";
import { MENU_BACKGROUND, MAROON } from '../constants/Colors';

class MobileMenu extends Component {
    state = {
        showX: false
    };
    showHideX = () => {
        this.setState({
            showX: !this.state.showX
        });
    }

    render() {
        const { showX } = this.state;

        return (
            <MenuContainer>
                <MenuButtonContainer onClick={this.showHideX}>
                    <Bar1 showX={showX} />
                    <Bar2 showX={showX} />
                    <Bar3 showX={showX} />
                </MenuButtonContainer>
                <Container showX={showX}>
                    <NavBarLink to="Welcome" label={'Welcome'} margin={'30px'} />
                    <NavBarLink to="PastWork" label={'Experience'} margin={'30px'} />
                    <NavBarLink to="Abilities" label={'Abilities'} margin={'30px'} />
                    <NavBarLink to="AboutMySelf" label={'About me'} margin={'30px'} />
                    <NavBarLink to="ContactInfo" label={'Contact me'} margin={'30px'} />
                </Container>
            </MenuContainer>
        )

    }
}

const MenuContainer = styled.div`
    position: absolute; 
    top: 0px;
`;

const MenuButtonContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    margin-left: 10px;
    margin-bottom: 10px;
    z-index: 1000;
    position: absolute; 
`;

const Bar = styled.div`
    width: 35px;
    height: 5px;
    background-color: ${MAROON};
    margin: 6px 0;
    transition: 0.4s;
`;

const Bar1 = styled(Bar)`
    ${props => props.showX ? changeBar1 : null};
`;

const Bar2 = styled(Bar)`
    ${props => props.showX ? changeBar2 : null};
`;

const Bar3 = styled(Bar)`
    ${props => props.showX ? changeBar3 : null};
`;


const changeBar1 = css`
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
`;

const changeBar2 = css`
    opacity: 0;
`;

const changeBar3 = css`
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-100%);
    opacity: 0;
  }
`;

const animationIn = css`
    animation: ${slideIn} 1s ease-in-out 0s;
`;
const animationOut = css`
    animation: ${slideOut} 1s ease-in-out 0s;
`

const Container = styled.span`
    display: flex; 
    position:relative;
    visibility: ${props => props.showX ? 'visable' : 'hidden'}; 
    transition: visibility 1s linear;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;
    background-color: ${MENU_BACKGROUND};
    ${props => props.showX ? animationIn : animationOut};  
`;



export default MobileMenu;