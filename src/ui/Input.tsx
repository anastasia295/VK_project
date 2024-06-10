import styled from "styled-components";

export const Input = styled.input<InputProps>`
  outline: none;
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
  ${({ withBorder }) =>
    withBorder &&
    `&:focus {
border: 1px solid #abcdef;
}
`}
`;

export interface InputProps {
  placeholder?: string;
  width?: string;
  height?: string;
  padding?: string;
  br?: string;
  bc?: string;
  border?: string;
  color?: string;
  defaultValue?: string;
  withBorder?: boolean;
  bbottom?: string;
  bleft?: string;
  btop?: string;
  bright?: string;
}
