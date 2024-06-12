import styled from "styled-components";

export const StyledDialogСontainer = styled.div`
  position: relative;
  width: 550px;
  border-radius: 10px;
  height: 708px;
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
  border-bottom: 1px solid #373737;
  border-top: 1px solid #373737;
  border-radius: 10px 10px 0 0;
`;

export const StyledDialogueBottom = styled.div`
  padding: 0 15px;
  background: #2b2b2b;
  width: 548px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #373737;
  border-radius: 0px 0px 10px 10px;
  position: absolute;
  bottom: 0px;
`;

export const StyledDialogueMessages = styled.div`
  padding: 20px 20px;
  width: 549px;
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const StyledCardFavorites = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  background: #222222;
  width: 325px;
  height: 40px;
  border-radius: 10px;
  &:hover {
    background: #3a3a3a;
  }
`;

export const StyledNav = styled.div`
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  background: #222222;
  width: 325px;
  height: 40px;
  border-radius: 10px;
  &:hover {
    background: #3a3a3a;
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
