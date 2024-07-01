import styled from "styled-components";

export const Input = styled.input<InputProps>`
  outline: none;
  font-family: fantasy;
  border-style: none;
  font-size: 12px;
  position: relative;

  ${({ br }) => br && `border-radius: ${br}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ bc }) => bc && `background-color: ${bc}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ bbottom }) => bbottom && `border-bottom: ${bbottom}`};
  ${({ bleft }) => bleft && `border-left: ${bleft}`};
  ${({ btop }) => btop && `border-top: ${btop}`};
  ${({ bright }) => bright && `border-right: ${bright}`};
  ${({ width }) => width && `width: ${width}`};
  ${({ fs }) => fs && `font-size: ${fs}`};

  &::placeholder {
    ${({ placeholderTextColor }) =>
      placeholderTextColor && `color: ${placeholderTextColor}`};
  }

  ${({ withBorder }) =>
    withBorder &&
    `&:focus {
border: 1px solid #abcdef;
}
`}
`;

export interface InputProps {
  placeholder?: string;
  placeholderTextColor?: string;
  width?: string;
  height?: string;
  padding?: string;
  br?: string;
  fs?: string;
  bc?: string;
  border?: string;
  color?: string;
  defaultValue?: string;
  withBorder?: boolean;
  error?: boolean;
  bbottom?: string;
  bleft?: string;
  btop?: string;
  bright?: string;
  helperText?: string;
}
