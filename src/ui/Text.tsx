import styled from "styled-components";
import React from "react";

export const Text = styled.h1<TextProps>`
  font-family: fantasy;
  font-size: 14px;
  color: #bcbcbc;
  ${({ fs }) => fs && `font-size: ${fs}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ textalign }) => textalign && `text-align: ${textalign}`};
  ${({ wb }) => wb && `word-break: ${wb}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${({ isActive }) =>
    isActive && ` height: 30px; background: #3a3a3a; border-radius: 5px;`};
`;

export interface TextProps {
  children: React.ReactNode;
  fs?: string;
  color?: string;
  cursor?: string;
  width?: string;
  type?: string;
  padding?: string;
  isActive?: boolean;
  value?: string | number | readonly string[] | undefined;
  textalign?: "center" | "left" | "right" | "justify";
  wb?: "break-all" | "keep-all";
}
