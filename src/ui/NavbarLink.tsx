import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)<NavbarLinkProps>`
  display: block;
  font-family: fantasy;
  text-decoration: none;

  ${({ fs }) => fs && `font-size: ${fs}`};
  ${({ color }) => color && `color: ${color}`};
`;

export interface NavbarLinkProps {
  fs?: string;
  color?: string;
}
