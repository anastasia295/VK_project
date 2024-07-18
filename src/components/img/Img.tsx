import styled from "styled-components";
import { StyledHoverAvatar } from "../editing/Editing.styled";

export const Img = styled.img<ImgProps>`
  display: block;
  ${({ height }) => height && `height: ${height}`};
  ${({ cursor }) => cursor && `cursor: ${cursor}`};
  ${({ width }) => width && `width: ${width}; min-width: ${width}`};
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ border }) => border && `border: ${border}`};
  &:hover ~ ${StyledHoverAvatar} {
    opacity: 1;
  }
`;

export interface ImgProps {
  height?: string;
  cursor?: string;
  width?: string;
  src?: string;
  br?: string;
  onerror?: string;
  border?: string;
  textalign?: "center" | "left" | "right" | "justify";
}
