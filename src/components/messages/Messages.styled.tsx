import styled from "styled-components";

export const StyledMessagesNav = styled.div`
  width: 347px;
  border-radius: 10px;
  height: 128px;
  background: #222222;
  padding: 10px 10px 20px 10px;
  border: 1px solid #373737;
`;

export const StyledMessagesСontainer = styled.div`
  width: 550px;
  border-radius: 10px;
  height: 608px;
  background: #222222;
  border-bottom: 1px solid #373737;
  border-left: 1px solid #373737;
  border-right: 1px solid #373737;
`;

export const BorderBottom = styled.div`
  width: 474px;
  border-bottom: 1px solid #373737;
`;

export const StyledMessagesWrapper = styled.div`
  position: relative;
  cursor: pointer;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  background: #222222;
  width: 548px;
  height: 68px;

  &:hover {
    background: #3a3a3a;
  }
`;

export const StyledAllChats = styled.div`
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
