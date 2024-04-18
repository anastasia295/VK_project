import styled from "styled-components";
import React from "react";

const StyledInput = styled.input<InputProps>`
  width: 300px;
  height: 50px;
  background: #3f3f3f;
  border: 1px solid #545454;
  border-radius: 15px;
  padding: 8px 0 8px 10px;

  margin-top: ${(props) => props.margintop};
`;

export interface InputProps {
  placeholder?: string;
  margintop?: string;
}

export function Input(props: InputProps) {
  return <StyledInput {...props}></StyledInput>;
}
