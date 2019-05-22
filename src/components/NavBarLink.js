import React from "react";
import { Link } from "react-scroll";
import styled from 'styled-components';
import { BasicTitle } from "./BasicTitle";

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
            <BasicTitle color={'#000000'} fontSize={'20px'} fontStyle={'italic'}>
                {label}
            </BasicTitle>
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