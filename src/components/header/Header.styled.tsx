import styled from "styled-components";
import { Input } from "../../ui/Input";

export const StyledHeader = styled.div`
  background: #222222;
  position: sticky;
  top: 0;
  z-index: 10;
`;
export const StyledHeaderContainer = styled.div`
  height: 48px;
  font-size: 12px;
  max-width: 1078px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: content-box;
`;

export const Flexx = styled.div`
  width: 350px;
  height: 500px;
  background: red;
`;
export const StyledBlockSearch = styled.div`
  display: none;
  &:hover {
    display: flex;
    position: absolute;
    top: 40px;
  }
`;

export const StyledSearchWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  padding: 15px 15px;
  background: #3a3a3a;
  border-radius: 8px;
  width: 230px;
  min-height: 50px;
`;

export const StyledChangedInput = styled(Input)`
  &:focus ~ ${StyledBlockSearch} {
    display: flex;
    position: absolute;
    top: 40px;
  }
`;

export const StyledLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 45px;
    aspect-ratio: 1;
    border-radius: 50%;
    padding: 6px;
    background: conic-gradient(from 135deg at top, currentColor 90deg, #0000 0)
        0 calc(50% - 4px) / 17px 8.5px,
      radial-gradient(
          farthest-side at bottom left,
          #0000 calc(100% - 6px),
          currentColor calc(100% - 5px) 99%,
          #0000
        )
        top right/50% 50% content-box content-box,
      radial-gradient(
          farthest-side at top,
          #0000 calc(100% - 6px),
          currentColor calc(100% - 5px) 99%,
          #0000
        )
        bottom / 100% 50% content-box content-box;
    background-repeat: no-repeat;
    animation: l11 1s infinite linear;
  }
  @keyframes l11 {
    100% {
      transform: rotate(1turn);
    }
  }
`;
