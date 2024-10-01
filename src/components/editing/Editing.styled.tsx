import styled from "styled-components";
import { Button } from "../../ui/Button";

export const StyledEditing = styled.form`
  height: 950px;
`;

export const StyledEditingСontainer = styled.div`
  width: 550px;
  border-radius: 10px;
  height: 280px;
  background: #222222;
  border: 1px solid #373737;
  position: relative;
`;

export const StyledInformation = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
  padding: 25px;
  width: 550px;
  border-radius: 10px;
  height: 608px;
  background: #222222;
  border: 1px solid #373737;
`;

export const StyledСhangeData = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  border-radius: 15px;
  height: 100px;
  background: #222222;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const StyledNavPersonal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  padding: 10px 15px;
  background: #222222;
  width: 325px;
  height: 40px;
  border-radius: 10px;
  &:hover {
    background: #3a3a3a;
  }
`;

export const StyledHoverAvatar = styled.div`
  margin-top: 5px;
  z-index: 4;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 10px;
  background: #3a3a3a;
  border-radius: 8px;
  width: 130px;
  opacity: 0;
  &:hover {
    opacity: 1;
  }
`;
export const StyledHoverBackgroundWrapper = styled.div`
  align-items: center;
  flex-direction: column;
  padding: 10px 10px;
  background: #3a3a3a;
  border-radius: 8px;
  width: 170px;
`;

export const StyledHoverBackground = styled.div`
  padding-top: 5px;
  z-index: 4;
  display: none;
  &:hover {
    display: flex;
  }
`;

export const StyledChangedButton = styled(Button)`
  &:hover ~ ${StyledHoverBackground} {
    display: flex;
  }
`;
