import styled from "styled-components";
import React from "react";

export const Button = styled.button<ButtonProps>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ fs }) => fs && `font-size: ${fs}`};
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
  bc?: string;
  border?: string;
}
