import React, { Component } from "react";
import styled from 'styled-components';
import NavBarLink from "./NavBarLink";
import resume from '../files/resume.pdf'
import BasicText from "./BasicText";
export default class Navbar extends Component {

  render() {
    return (
      <NavContainer>
        <NavContent>
          <NavBarLink to="Welcome" label={'Welcome'} />
          <NavBarLink to="PastWork" label={'Experience'} />
          <NavBarLink to="Abilities" label={'Abilities'} />
          <NavBarLink to="AboutMySelf" label={'About me'} />
          <NavBarLink to="ContactInfo" label={'Contact me'} />
        </NavContent>
        <DownloadResumeDiv>
          <PDFDownload href={resume} download={'David Shemain resume'} >
            <BasicText text={'Resume'} fontStyle={'italic'} />
          </PDFDownload>
        </DownloadResumeDiv>
      </NavContainer>
    );
  }
}

const NavContainer = styled.nav`
  background-color: #FFFF;
  position: sticky;
  top: 0px;
  height: 1.5em;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-shrink: 0;
  @media (max-width: 700px) {
  display: none;
  }
  z-index:100;
  overflow: hidden;
`;

const NavContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-grow: 0.2;
  margin: auto;
  margin-left: 20%;
`;

const PDFDownload = styled.a`
  text-decoration: none;
`;

const DownloadResumeDiv = styled.div`
  margin: auto;
`;