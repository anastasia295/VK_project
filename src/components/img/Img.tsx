import styled from "styled-components";

export const Img = styled.img<ImgProps>`
  display: block;
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}; min-width: ${width}`};
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ border }) => border && `border: ${border}`};
`;

export interface ImgProps {
  height?: string;
  width?: string;
  src?: string;
  br?: string;
  border?: string;
  textalign?: "center" | "left" | "right" | "justify";
}
