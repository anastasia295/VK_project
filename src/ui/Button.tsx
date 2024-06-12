import styled from "styled-components";
import React from "react";

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: block;
  outline: none;
  border: 0;
  font-family: fantasy;
  ${({ pt }) => pt && `padding-top: ${pt}`};
  ${({ pb }) => pb && `padding-bottom: ${pb}`};
  ${({ pr }) => pr && `padding-right: ${pr}`};
  ${({ pl }) => pl && `padding-left: ${pl}`};
  ${({ fs }) => fs && `font-size: ${fs}`};
  ${({ fw }) => fw && `font-weight: ${fw}`};
  ${({ lh }) => lh && `line-height: ${lh}`};
  ${({ bc }) => bc && `background-color: ${bc}`};
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ width }) => width && `width: ${width}`};
`;

export interface ButtonProps {
  color?: string;
  children: React.ReactNode;
  width?: string;
  height?: string;
  fs?: string;
  lh?: string;
  br?: string;
  fw?: string;
  bc?: string;
  border?: string;
  form?: string;
  pt?: string;
  pl?: string;
  pb?: string;
  pr?: string;
}
