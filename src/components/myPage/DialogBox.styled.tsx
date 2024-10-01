import { styled } from "styled-components";

export const dialog = styled.div`
  padding: 25px;
  width: 502px;
  background: #222222;
  height: 338px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const StyledDialogBox = styled.div`
  padding: 25px;
  border-radius: 15px;
  width: 502px;
  background: #222222;
  height: 338px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: fixed;
  top: 20%;
  left: calc(50% - 300px);
  z-index: 100;
`;
