import styled from "styled-components";
import { Header } from "../../src/components/header/Header";
import { StyledPageWrapper, StyledPageContainer } from "./Page.styled";
import { NavbarLink } from "../../src/ui/NavbarLink";
import { Img } from "../components/img/Img";
import { Flex } from "../ui/Flex";
import messages from "../components/img/img/messages.png";

import communities from "../components/img/img/communities.png";
import friends from "../components/img/img/friends.png";

import myPage from "../components/img/img/myPage.png";

export function Page() {
  return (
    <StyledPageWrapper>
      <Header></Header>
      <StyledPageContainer>
        <Flex display="flex" flexdirection="column" gap="15px">
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={myPage}></Img>
            <NavbarLink fs="15px" color="white" to="entrance/myPage">
              Моя страница
            </NavbarLink>
          </Flex>
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={messages}></Img>
            <NavbarLink fs="15px" color="white" to="entrance/messages">
              Мессенджер
            </NavbarLink>
          </Flex>
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={friends}></Img>
            <NavbarLink fs="15px" color="white" to="friends">
              Друзья
            </NavbarLink>
          </Flex>
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={communities}></Img>
            <NavbarLink fs="15px" color="white" to="entrance/communities">
              Сообщества
            </NavbarLink>
          </Flex>
          <NavbarLink fs="14px" color="white" to="entrance">
            Вход
          </NavbarLink>
        </Flex>
      </StyledPageContainer>
    </StyledPageWrapper>
  );
}
