import styled from "styled-components";
import React from "react";

export const Text = styled.h1<TextProps>`
  font-family: fantasy;
  ${({ fs }) => fs && `font-size: ${fs}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ textalign }) => textalign && `text-align: ${textalign}`};
`;

export interface TextProps {
  children: React.ReactNode;
  fs?: string;
  color?: string;
  width?: string;

  textalign?: "center" | "left" | "right" | "justify";
}
