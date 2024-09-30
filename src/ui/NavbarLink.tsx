import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarLink = styled(Link)<NavbarLinkProps>`
  cursor: pointer;
  font-family: fantasy;
  text-decoration: none;
  margin-top: 4px;
  ${({ fs }) => fs && `font-size: ${fs}`};
  ${({ background }) => background && `background: ${background}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ display }) => display && `display: ${display}`};
  ${({ alignitems }) => alignitems && `align-items: ${alignitems}`};
  ${({ alignitems }) => alignitems && `align-items: ${alignitems}`};
  ${({ flexdirection }) => flexdirection && `flex-direction: ${flexdirection}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ justifycontent }) =>
    justifycontent && `justify-content: ${justifycontent}`};

  ${({ hidebackground }) =>
    hidebackground &&
    `&:hover {
      background: #3a3a3a;
    } 
`};
  ${({ isactive }) =>
    isactive && `height: 30px; background: #3a3a3a; border-radius: 5px;`};
`;

export interface NavbarLinkProps {
  fs?: string;
  color?: string;
  hidebackground?: boolean;
  padding?: string;
  width?: string;
  height?: string;
  br?: string;
  display?: string;
  background?: string;
  alignitems?: string;
  flexdirection?: string;
  gap?: string;
  isactive?: boolean;
  justifycontent?: string;
}
