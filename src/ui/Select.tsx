import styled from "styled-components";

export const Select = styled.select<SelectProps>`
  outline: none;
  ${({ br }) => br && `border-radius: ${br}`};
  ${({ height }) => height && `height: ${height}`};
  ${({ color }) => color && `color: ${color}`};
  ${({ padding }) => padding && `padding: ${padding}`};
  ${({ bc }) => bc && `background-color: ${bc}`};
  ${({ border }) => border && `border: ${border}`};
  ${({ width }) => width && `width: ${width}`};

  ${({ withBorder }) =>
    withBorder &&
    `&:focus {
border: 1px solid #abcdef;
}
`}
`;

export interface SelectProps {
  placeholder?: string;
  withBorder?: boolean;
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
