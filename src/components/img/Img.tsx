import styled from "styled-components";

export const Img = styled.img<ImgProps>`
  ${({ height }) => height && `height: ${height}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ br }) => br && `border-radius: ${br}`};
`;

export interface ImgProps {
  height?: string;
  width?: string;
  src?: string;
  br?: string;
  textalign?: "center" | "left" | "right" | "justify";
}
