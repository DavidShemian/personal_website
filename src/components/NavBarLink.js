import React from "react";
import styled from 'styled-components';
import { Link } from "react-scroll";
import BasicText from "./BasicText";

export const NavBarLink = ({ to, onClick, label }) => (
    <Span>
        <Link
            to={to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={onClick}
        >
            <BasicText text={label} fontStyle={'italic'} />
        </Link>
    </Span>
);

const Span = styled.span`
    cursor:pointer;
`

export default NavBarLink;