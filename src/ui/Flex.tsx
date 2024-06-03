import styled from "styled-components";
import React from "react";

export const Flex = styled.div<FlexProps>`
  display: flex;
  ${({ flexdirection }) => flexdirection && `flex-direction: ${flexdirection}`};
  ${({ justifycontent }) =>
    justifycontent && `justify-content: ${justifycontent}`};
  ${({ alignitems }) => alignitems && `align-items: ${alignitems}`};
  ${({ gap }) => gap && `gap: ${gap}`};
`;

export interface FlexProps {
  flexdirection?: "column" | "row" | "column-reverse" | "row-reverse";
  justifycontent?: "center" | "space-between" | "space-around" | "space-evenly";
  alignitems?: "center" | "stretch" | "end";
  gap?: string;

  children?: React.ReactNode;
}
