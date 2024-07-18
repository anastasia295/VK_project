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
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
`;

export interface TextProps {
  children: React.ReactNode;
  fs?: string;
  color?: string;
  cursor?: string;
  width?: string;
  type?: string;

  value?: string | number | readonly string[] | undefined;
  textalign?: "center" | "left" | "right" | "justify";
  wb?: "break-all" | "keep-all";
}
