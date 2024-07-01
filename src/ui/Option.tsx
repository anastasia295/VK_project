import styled from "styled-components";

export const Option = styled.option<OptionProps>`
  ${({ fs }) => fs && `font-size: ${fs}`};
`;

export interface OptionProps {
  fs?: string;
}
