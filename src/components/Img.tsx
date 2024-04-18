import styled from "styled-components";
import React from "react";
import iconvk from "../Img/iconvk.png";

const StyledImg = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 20px;
`;

export function Img() {
  return <StyledImg src={iconvk}></StyledImg>;
}
