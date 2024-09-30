import styled from "styled-components";
import React from "react";

export const Text = styled.h1<TextProps>`
  word-wrap: break-word;
  font-size: 14px;
  color: #bcbcbc;
  ${({ fs }) => fs && `font-size: ${fs}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ textalign }) => textalign && `text-align: ${textalign}`};
  ${({ textoverflow }) => textoverflow && `text-overflow: ${textoverflow}`};
  ${({ wb }) => wb && `word-break: ${wb}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${({ overflow }) => overflow && `overflow: ${overflow}`};
  ${({ whitespace }) => whitespace && `white-space: ${whitespace}`};
  ${({ isactive }) =>
    isactive && ` height: 30px; background: #3a3a3a; border-radius: 5px;`};
`;

export interface TextProps {
  children: React.ReactNode;
  fs?: string;
  color?: string;
  cursor?: string;
  width?: string;
  type?: string;
  padding?: string;
  isactive?: boolean;
  textoverflow?: "clip" | "ellipsis";
  value?: string | number | readonly string[] | undefined;
  textalign?: "center" | "left" | "right" | "justify";
  overflow?: "hidden" | "clip" | "scroll" | "auto";
  whitespace?: "nowrap" | "pre" | "break-spaces" | "pre-wrap";
  wb?: "break-all" | "keep-all";
}
