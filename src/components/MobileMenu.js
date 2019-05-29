import React, { Component } from 'react';
import styled, { keyframes, css } from 'styled-components';
import CenteredContainer from './CenteredContainer';
import NavBarLink from "./NavBarLink";
import Logo from './Logo';

class MobileMenu extends Component {
    state = {
        showMenu: false
    };

    onClickMenu = () => {
        console.log("123123");
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    render() {
        const { showMenu } = this.state;

        return (<MenuContainer>
            <Button onClick={this.onClickMenu}>
                <Logo width={'30px'} height={'30px'} src={'https://i.ibb.co/n3MZ7T4/burger-menu-transperent.png'} />
            </Button>
            <Container showMenu={showMenu}>
                <NavBarLink to="Welcome" label={'Welcome'} />
                <NavBarLink to="PastWork" label={'Experience'} />
                <NavBarLink to="Abilities" label={'Abilities'} />
                <NavBarLink to="AboutMySelf" label={'About me'} />
                <NavBarLink to="ContactInfo" label={'Contact me'} />
            </Container>
        </MenuContainer>)
    }
}

const MenuContainer = styled(CenteredContainer)`
    /* position: sticky; */
    /* top: 0px; */
    /* z-index: -1; */
    /* background-color: red; */
`;

const Button = styled.button`
    border:0; 
    background: transparent;
`;

const slideIn = keyframes`
  0% {
    display:flex;
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
    opacity: 1;
    display:flex;
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
    background: red;
    display: flex; 
    visibility: ${props => props.showMenu ? 'visible' : 'hidden'}; 
    transition: visibility 1s linear;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 200px;
    width: 100px;
    ${props => props.showMenu ? animationIn : animationOut};  
`;



export default MobileMenu;