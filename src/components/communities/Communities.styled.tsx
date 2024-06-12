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
  height: 608px;
  background: #222222;
  border: 1px solid #373737;
  position: relative;
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

export const StyledBorderBottom = styled.div`
  margin-top: 80px;
  margin-left: -85px;
  width: 495px;
  border-bottom: 1px solid #373737;
  position: absolute;
`;
