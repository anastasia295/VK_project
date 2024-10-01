import styled from "styled-components";

export const StyledCardNav = styled.div`
  width: 345px;
  border-radius: 10px;
  height: 128px;
  background: #222222;
  padding: 10px 10px 20px 10px;
  border: 1px solid #373737;
`;

export const StyledCardСontainer = styled.div`
  padding: 20px 20px;
  width: 550px;
  border-radius: 10px;
  min-height: 608px;
  background: #222222;
  border: 1px solid #373737;
  position: relative;
`;

export const StyledLoader = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 50px;
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
