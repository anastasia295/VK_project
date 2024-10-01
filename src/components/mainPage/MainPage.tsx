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
import { useEffect, useState } from "react";

export const MainPage = ({ children }: TСhildren) => {
  const userData = useSelector((state: RootState) => state.auth.user) as TUser;
  const [uniqueNotification, setUniqueNotification] = useState<number[]>([]);

  const friendOffer = useSelector((state: RootState) => state.friend.offer);
  const notification = useSelector(
    (state: RootState) => state.messages.notification
  );

  useEffect(() => {
    const uniqueNames = new Set(notification);
    const res = Array.from(uniqueNames);
    setUniqueNotification(res);
  }, [notification]);

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
            hidebackground
            to={"/" + userData.id}
          >
            <Img width="20px" height="20px" src={myPage} />
            <Text>Моя страница </Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground
            to="/messages"
          >
            <Img width="20px" height="20px" src={messages}></Img>
            <Text>Мессенджер</Text>
            {uniqueNotification.length > 0 && (
              <Text color="#64a1ff" fs="15px">
                {uniqueNotification.length}+
              </Text>
            )}
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground
            to="/friends"
          >
            <Img width="20px" height="20px" src={friends}></Img>
            <Text cursor="pointer">Друзья</Text>

            {friendOffer.length > 0 && (
              <Text color="#64a1ff" fs="15px">
                {friendOffer.length}+
              </Text>
            )}
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            gap="10px"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground
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
            hidebackground
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
