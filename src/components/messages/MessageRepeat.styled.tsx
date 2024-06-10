import styled from "styled-components";

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

export const BorderBottom = styled.div`
  width: 474px;
  border-bottom: 1px solid #373737;
`;
