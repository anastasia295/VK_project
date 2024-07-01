import styled from "styled-components";
import React from "react";

export const Area = styled.div<AreaProps>`
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ mt }) => mt && `margin-top: ${mt}`};
  ${({ mb }) => mb && `margin-bottom: ${mb}`};
  ${({ mr }) => mr && `margin-right: ${mr}`};
  ${({ ml }) => ml && `margin-left: ${ml}`};
  ${({ pt }) => pt && `padding-top: ${pt}`};
  ${({ pb }) => pb && `padding-bottom: ${pb}`};
  ${({ pr }) => pr && `padding-right: ${pr}`};
  ${({ pl }) => pl && `padding-left: ${pl}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ margin }) => margin && `padding: ${margin}`};
  ${({ bc }) => bc && `background-color: ${bc}`};
  ${({ position }) => position && `position: ${position}`};
  ${({ top }) => top && `top: ${top}`};
  ${({ right }) => right && `right: ${right}`};
  ${({ left }) => left && `left: ${left}`};
  ${({ bottom }) => bottom && `bottom: ${bottom}`};
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ transform }) => transform && `transform: ${transform}`};
`;

export interface AreaProps {
  children: React.ReactNode;
  mt?: string;
  ml?: string;
  mb?: string;
  mr?: string;
  pt?: string;
  pl?: string;
  pb?: string;
  pr?: string;
  padding?: string;
  margin?: string;
  bc?: string;
  height?: string;
  width?: string;
  br?: string;
  top?: string;
  right?: string;
  left?: string;
  bottom?: string;
  bbottom?: string;
  bleft?: string;
  btop?: string;
  bright?: string;
  transform?: string;
  border?: string;
  position?: "relative" | "absolute" | "fixed" | "sticky";
}
