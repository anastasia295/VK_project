import { Header } from "../header/Header";
import {
  StyledPageWrapper,
  StyledPageContainer,
  StyledNavPage,
} from "./MainPage.styled";
import { NavbarLink } from "../../ui/NavbarLink";
import { Img } from "../../components/img/Img";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import messages from "../../components/img/img/messages.svg";
import photosnav from "../../components/img/img/photo.svg";
import communities from "../../components/img/img/communities.svg";
import friends from "../../components/img/img/friends.svg";
import myPage from "../../components/img/img/main-page.svg";

export function MainPage({ children }: { children?: React.ReactElement }) {
  return (
    <StyledPageWrapper>
      <Header></Header>
      <StyledPageContainer>
        <Flex display="flex" flexdirection="column" gap="5px">
          <NavbarLink to="/mypage">
            <StyledNavPage>
              <Img width="20px" height="20px" src={myPage} />
              <Text>Моя страница</Text>
            </StyledNavPage>
          </NavbarLink>
          <NavbarLink to="/messages">
            <StyledNavPage>
              <Img width="20px" height="20px" src={messages}></Img>
              <Text>Мессенджер</Text>
            </StyledNavPage>
          </NavbarLink>
          <NavbarLink to="/friends">
            <StyledNavPage>
              <Img width="20px" height="20px" src={friends}></Img>
              <Text>Друзья</Text>
            </StyledNavPage>
          </NavbarLink>
          <NavbarLink to="/communities">
            <StyledNavPage>
              <Img width="20px" height="20px" src={communities}></Img>
              <Text>Сообщества</Text>
            </StyledNavPage>
          </NavbarLink>
          <NavbarLink to="/photos">
            <StyledNavPage>
              <Img width="20px" height="18px" src={photosnav}></Img>
              <Text>Фотографии</Text>
            </StyledNavPage>
          </NavbarLink>
          <NavbarLink color="white" to="entrance">
            Вход
          </NavbarLink>
        </Flex>
        {children}
      </StyledPageContainer>
    </StyledPageWrapper>
  );
}
