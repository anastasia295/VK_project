import styled from "styled-components";
import React from "react";

export const Flex = styled.div<FlexProps>`
  ${({ flexdirection }) => flexdirection && `flex-direction: ${flexdirection}`};
  ${({ justifycontent }) =>
    justifycontent && `justify-content: ${justifycontent}`};
  ${({ alignitems }) => alignitems && `align-items: ${alignitems}`};
  ${({ flexwrap }) => flexwrap && `flex-wrap: ${flexwrap}`};
  ${({ gap }) => gap && `gap: ${gap}`};
  ${({ display }) => display && `display: ${display}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ height }) => height && `height: ${height}`};
`;

export interface FlexProps {
  flexdirection?: "column" | "row" | "column-reverse" | "row-reverse";
  justifycontent?: "center" | "space-between" | "space-around" | "space-evenly";
  alignitems?: "center" | "stretch" | "end";
  display?: "flex" | "block";
  flexwrap?: "nowrap" | "wrap-reverse" | "wrap";
  gap?: string;
  width?: string;
  height?: string;

  children?: React.ReactNode;
}
