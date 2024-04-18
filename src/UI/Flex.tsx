import styled from "styled-components";
import React from "react";

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${(props) => props.flexdirection};
  justify-content: ${(props) => props.justifycontent};
  align-items: ${(props) => props.alignitems};
`;

export interface FlexProps {
  flexdirection?: "column" | "row";
  justifycontent?: "center" | "space-between";
  alignitems?: "center" | "stretch";

  children?: React.ReactNode;
}

export function Flex(props: FlexProps) {
  return <StyledFlex {...props}></StyledFlex>;
}
