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
import { useEffect, useState } from "react";
import axios from "../../utils/axios/axios";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { TUser } from "../../types/user";

export const UserFriends = () => {
  const [page, setPage] = useState<TUser>({} as TUser);
  const { id } = useParams();

  useEffect(() => {
    async function fethUser() {
      if (id) {
        try {
          const { data } = await axios.get(`user/${id}`);
          console.log(data);
          setPage(data.data);
        } catch (error) {
          throw new Error((error as AxiosError).message);
        }
      }
    }
    fethUser();
  }, [id]);

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
          {page.friends?.map((el: TUser) => {
            return (
              <NavbarLink to={"/" + el.id}>
                <Area mt="15px">
                  <Card
                    key={el.id}
                    hideBorder={false}
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
            hidebackground={true}
            to={"/" + page.id}
          >
            <Flex display="flex" gap="10px">
              <Img
                src={page.avatar ? page.avatar : defAvatar}
                width="34px"
                height="34px"
                br="50%"
              ></Img>
              <Text color="#64a1ff" fs="13px">
                {page.firstName} {page.lastName}
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
            hidebackground={true}
            to={"/" + id + "/friends"}
          >
            <Text color="#dedede" fs="13px">
              Друзья {page.firstName}
            </Text>
          </NavbarLink>
        </StyledCardNav>
        ;
      </Flex>
    </MainPage>
  );
};
