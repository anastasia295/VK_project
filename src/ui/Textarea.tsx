import styled from "styled-components";

export const Textarea = styled.textarea<TextareaProps>`
  overflow: hidden;
  line-height: 1.2;

  resize: none;
  outline: none;
  font-family: fantasy;
  overflow: hidden;
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

  type?: string;
}
