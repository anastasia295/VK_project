import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)<NavbarLinkProps>`
  display: block;
  font-family: fantasy;
  ${({ fs }) => fs && `font-size: ${fs}`};
  ${({ color }) => color && `color: ${color}`};
  text-decoration: none;
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: blue;
  }
`;

export interface NavbarLinkProps {
  fs?: string;
  color?: string;
}
