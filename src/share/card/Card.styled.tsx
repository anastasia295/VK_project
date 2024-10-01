import styled from "styled-components";
import { TStyledTextWrapperProps } from "./Card.types";

export const StyledCardWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  width: 100%;
  height: 92px;
`;

export const StyledTextWrapper = styled.div<TStyledTextWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  width: 100%;
  height: 92px;
  position: relative;

  &:after {
    content: "";
    border-bottom: 1px solid #373737;
    position: absolute;
    width: 100%;
    bottom: -1px;
  }
  ${({ hideborder }) =>
    hideborder &&
    `  &:hover {
    &:after {
      border-bottom: none;
    }
`}
`;
