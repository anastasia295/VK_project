import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Card } from "../../share/card/Card";
import fre from "../../components/img/img/fre.png";
import defAvatar from "../../components/img/img/defAvatar.png";
import { StyledCardСontainer, StyledCardNav } from "./Friends.styled";
import { Img } from "../img/Img";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import { useParams } from "react-router-dom";
import { TUser } from "../../types/user";
import { RootState } from "../../store/store/Store";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const filterFriends = (searchText: string, listOfFriends: TUser[]) => {
  if (!searchText) {
    return listOfFriends;
  }
  return listOfFriends.filter((el: TUser) => {
    const name = `${el.lastName} ${el.firstName} ${el.lastName}`;
    return name.toLowerCase().includes(searchText.toLowerCase());
  });
};

export const UserFriends = () => {
  const userPage = useSelector((state: RootState) => state.page.page) as TUser;
  const { id } = useParams();
  const [searchFriends, setSearchFriends] = useState("");
  const [friendsList, setFriendsList] = useState(userPage.friends);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredFriends = filterFriends(searchFriends, userPage.friends);
      setFriendsList(filteredFriends);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchFriends, userPage.friends]);

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text color="#dedede" fs="15px">
              Все друзья
            </Text>
            <Text color="#dedede" fs="15px">
              Общие друзья
            </Text>
          </Flex>
          <Area mt="20px">
            <Flex display="flex">
              <Input
                bleft="1px solid #373737"
                bbottom="1px solid #373737"
                btop="1px solid #373737"
                br="10px 0 0 10px"
                padding="5px 55px 5px 10px"
                width="450px"
                height="34px"
                placeholder="Поиск друзей"
                bc="#222222"
                color="#e9e9e9"
                value={searchFriends}
                onChange={(event) => {
                  setSearchFriends(event.target.value);
                }}
              ></Input>
              <Area
                bc="#2c2c2c"
                width="60px"
                height="34px"
                br="0px 5px 5px 0px"
                border="1px solid #373737"
              >
                <Area position="absolute" mt="6px" ml="18px">
                  <Img src={fre} width="17px" height="17px"></Img>
                </Area>
              </Area>
            </Flex>
          </Area>
          {friendsList?.map((el: TUser, index) => {
            return (
              <NavbarLink key={index} to={"/" + el.id}>
                <Area mt="15px">
                  <Card
                    firstName={el.firstName}
                    lastName={el.lastName}
                    avatar={el.avatar ? el.avatar : defAvatar}
                  >
                    <Flex display="flex" gap="15px">
                      <NavbarLink to="#" color="#64a1ff" fs="13px">
                        Написать сообщение
                      </NavbarLink>
                      <NavbarLink to="#" color="#64a1ff" fs="13px">
                        Добавить в друзья
                      </NavbarLink>
                    </Flex>
                  </Card>
                </Area>
              </NavbarLink>
            );
          })}
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink
            display="flex"
            width="100%"
            height="50px"
            br="5px"
            padding="8px"
            hidebackground
            to={"/" + userPage.id}
          >
            <Flex display="flex" gap="10px">
              <Img
                src={userPage.avatar ? userPage.avatar : defAvatar}
                width="34px"
                height="34px"
                br="50%"
              ></Img>
              <Text color="#64a1ff" fs="13px">
                {userPage.firstName} {userPage.lastName}
                <Text color="#a0a0a0" fs="12px">
                  Перейти к страницe
                </Text>
              </Text>
            </Flex>
          </NavbarLink>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground
            background="#3a3a3a"
            to={"/" + id + "/friends"}
          >
            <Flex display="flex" gap="5px">
              <Text color="#dedede" fs="13px">
                Друзья
              </Text>
              <Text> {userPage.firstName}</Text>
            </Flex>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
