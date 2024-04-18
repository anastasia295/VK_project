import styled from "styled-components";
import React from "react";

const StyledText = styled.h1<TextProps>`
  color: #d3d3d3;
  font-size: ${(props) => props.fontsize};
  margin-top: ${(props) => props.margintop};
  text-align: center;
`;

export interface TextProps {
  children: React.ReactNode;
  fontsize: string;
  margintop?: string;
}

export function Text(props: TextProps) {
  return <StyledText {...props}></StyledText>;
}
