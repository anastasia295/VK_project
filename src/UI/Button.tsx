import styled from "styled-components";
import React from "react";

const StyledButton = styled.button<ButtonProps>`
  width: 300px;
  height: 50px;
  border-radius: 15px;
  padding: 8px 0 8px 10px;
  color: #191919;
  font-size: 15px;
  line-height: 24px;
  margin-top: 20px;
  background-color: ${(props) => props.backgroundcolor};
  margin-top: ${(props) => props.margintop};
`;

export interface ButtonProps {
  color?: string;
  backgroundcolor?: string;
  children: React.ReactNode;
  margintop?: string;
}

export function Button(props: ButtonProps) {
  return <StyledButton {...props}></StyledButton>;
}
