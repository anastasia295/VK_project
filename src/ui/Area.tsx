import styled from "styled-components";
import React from "react";

export const Area = styled.h1<AreaProps>`
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
}
