import styled from "styled-components";

export const StyledDialogСontainer = styled.div`
  position: relative;
  width: 550px;
  border-radius: 10px;
  height: 715px;
  background: #222222;
  border-bottom: 1px solid #373737;
  border-left: 1px solid #373737;
  border-right: 1px solid #373737;
`;

export const StyledDialogueUp = styled.div`
  padding: 0 15px;
  width: 549px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid #373737;
  border-top: 1px solid #373737;
  border-radius: 10px 10px 0 0;
`;

export const StyledDialogueBottom = styled.div<{ height: number }>`
  padding: 10px 25px;
  background: #2b2b2b;
  width: 548px;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 5px;
  border-top: 1px solid #373737;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  bottom: 0px;
`;

export const StyledDialogueMessages = styled.div`
  position: relative;
  padding: 20px 35px 55px;
  width: 549px;
  height: 600px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledCardNav = styled.div`
  width: 345px;
  border-radius: 10px;
  height: 128px;
  background: #222222;
  padding: 10px 10px 20px 10px;
  border: 1px solid #373737;
`;
