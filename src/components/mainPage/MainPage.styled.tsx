import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  width: 100%;
  min-height: 1200px;
  background: #141414;
`;

export const StyledPageContainer = styled.div`
  max-width: 1078px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
  width: 100%;
  box-sizing: content-box;
  display: flex;
  justify-content: space-between;
`;

export const StyledNavPage = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  width: 160px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    background: #3a3a3a;
  }
`;
