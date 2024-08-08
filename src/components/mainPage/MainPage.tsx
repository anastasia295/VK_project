import { Header } from "../header/Header";
import { StyledPageWrapper, StyledPageContainer } from "./MainPage.styled";
import { NavbarLink } from "../../ui/NavbarLink";
import { Img } from "../../components/img/Img";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import messages from "../../components/img/img/messages.svg";
import photosnav from "../../components/img/img/photo.svg";
import communities from "../../components/img/img/communities.svg";
import friends from "../../components/img/img/friends.svg";
import myPage from "../../components/img/img/main-page.svg";
import { RootState } from "../../store/store/Store";
import { TUser, TСhildren } from "../../types/user";
import { useSelector } from "react-redux";

export const MainPage = ({ children }: TСhildren) => {
  const userData = useSelector((state: RootState) => state.auth.user) as TUser;

  return (
    <StyledPageWrapper>
      <Header></Header>
      <StyledPageContainer>
        <Flex display="flex" flexdirection="column" gap="5px">
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
            to={"/" + userData.id}
          >
            <Img width="20px" height="20px" src={myPage} />
            <Text>Моя страница</Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
            to="/messages"
          >
            <Img width="20px" height="20px" src={messages}></Img>
            <Text>Мессенджер</Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
            to="/friends"
          >
            <Img width="20px" height="20px" src={friends}></Img>
            <Text cursor="pointer">Друзья</Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
            to="/communities"
          >
            <Img width="20px" height="20px" src={communities}></Img>
            <Text>Сообщества</Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
            to="/photos"
          >
            <Img width="20px" height="18px" src={photosnav}></Img>
            <Text>Фотографии</Text>
          </NavbarLink>
        </Flex>
        {children}
      </StyledPageContainer>
    </StyledPageWrapper>
  );
};
