import styled from "styled-components";

export const Textarea = styled.textarea<TextareaProps>`
  outline: none;
  outline: none;
  border-style: none;
  resize: none;
  font-size: 14px;
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ bc }) => bc && `background-color: ${bc}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ wrap }) => wrap && `wrap: ${wrap}`};
`;

export interface TextareaProps {
  placeholder?: string;
  width?: string;
  height?: string;
  padding?: string;
  br?: string;
  bc?: string;
  border?: string;
  color?: string;
  defaultValue?: string;

  maxlength?: string;

  wrap?: "soft" | "hard";
}
