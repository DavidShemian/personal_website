import React from "react";
import styled from 'styled-components';
import { Link } from "react-scroll";
import BasicText from "./BasicText";

export const NavBarLink = ({ to, onClick, label }) => (
    <Button>
        <Link
            to={to}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={onClick}
        >
            <BasicText text={label} fontStyle={'italic'}/>
        </Link>
    </Button>
);

const Button = styled.button`
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
outline:none;
`;

export default NavBarLink;