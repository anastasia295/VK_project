import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Input } from "../../ui/Input";
import { Text } from "../../ui/Text";
import { Img } from "../img/Img";
import fre from "../../components/img/img/fre.png";
import defAvatar from "../../components/img/img/defAvatar.png";
import { MainPage } from "../mainPage/MainPage";
import { StyledCardNav, StyledCardСontainer } from "./Search.styled";
import axios from "../../utils/axios/axios";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { NavbarLink } from "../../ui/NavbarLink";
import { Button } from "../../ui/Button";
import { AxiosError } from "axios";
import { TFriendStatusAll, TUser } from "../../types/user";

export const Search = () => {
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState<TUser[]>([]);

  useEffect(() => {
    async function fethUser() {
      if (searchValue) {
        try {
          const { data } = await axios.get(`user/search?key=${searchValue}`);
          setUser(data.data);
        } catch (error) {
          throw new Error((error as AxiosError).message);
        }
      }
    }

    fethUser();
  }, [searchValue]);

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const handleAdd = async (id: number, friendStatus: string) => {
    if (id) {
      try {
        await axios.post("friend/", {
          whom: id,
        });
        const newFriendStatus = user.map((el: any) => {
          if (el.id === id && friendStatus === "none") {
            return { ...el, friendStatus: "request" };
          } else if (el.id === id && friendStatus === "offer") {
            return { ...el, friendStatus: "friend" };
          } else {
            return el;
          }
        });
        setUser(newFriendStatus);
      } catch (error) {
        throw new Error((error as AxiosError).message);
      }
    }
  };

  const handleDelete = async (id: number, friendStatus: string) => {
    if (id) {
      try {
        await axios.delete(`friend/${id}`);
        const newFriendStatus = user.map((el: any) => {
          if (el.id === id && friendStatus === "request") {
            return { ...el, friendStatus: "none" };
          } else if (el.id === id && friendStatus === "offer") {
            return { ...el, friendStatus: "none" };
          } else if (el.id === id && friendStatus === "friend") {
            return { ...el, friendStatus: "none" };
          } else {
            return el;
          }
        });
        console.log(newFriendStatus, "friendstatus");
        setUser(newFriendStatus);
      } catch (error) {
        throw new Error((error as AxiosError).message);
      }
    }
  };

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text fs="17px">Поиск</Text>
          </Flex>
          <Area mt="20px">
            <Flex display="flex">
              <Input
                type="search"
                onChange={debounce(
                  (e: React.ChangeEvent<HTMLInputElement>) =>
                    handleSearch(e.target.value),
                  2000
                )}
                bleft="1px solid #373737"
                bbottom="1px solid #373737"
                btop="1px solid #373737"
                br="10px 0 0 10px"
                padding="5px 55px 5px 10px"
                width="100%"
                height="34px"
                placeholder="Введите запрос"
                bc="#222222"
                color="#e9e9e9"
              ></Input>
              <Area
                bc="#2c2c2c"
                width="40px"
                height="34px"
                br="0px 5px 5px 0px"
                border="1px solid #373737"
              >
                <Area position="absolute" mt="6px" ml="10px">
                  <Img src={fre} width="17px" height="17px"></Img>
                </Area>
              </Area>
            </Flex>
          </Area>
          <Area mt="20px">
            <Text fs="14px">Люди</Text>
            {user?.map((el: TUser) => (
              <Area mt="15px">
                <Flex
                  display="flex"
                  alignitems="center"
                  justifycontent="space-between"
                >
                  <NavbarLink key={el.id} to={"/" + el.id}>
                    <Flex display="flex" alignitems="center" gap="10px">
                      <Img
                        br="50%"
                        width="80px"
                        height="80px"
                        src={el.avatar ? el.avatar : defAvatar}
                      ></Img>
                      <Flex display="flex" flexdirection="column" gap="10px">
                        <Text cursor="pointer" fs="14px">
                          {el.lastName} {el.firstName}
                        </Text>
                        <Text>{el.status}</Text>
                        <NavbarLink to="#" color="#64a1ff" fs="13px">
                          Написать сообщение
                        </NavbarLink>
                      </Flex>
                    </Flex>
                  </NavbarLink>
                  {el.friendStatus === "offer" ? (
                    <Flex display="flex" gap="5px">
                      <Button
                        onClick={() => handleAdd(el.id, el.friendStatus)}
                        fs="15px"
                        br="8px"
                        color="black"
                        bc="#c8c8c8"
                        height="32px"
                        width="130px"
                      >
                        Принять заявку
                      </Button>
                      <Button
                        onClick={() => handleDelete(el.id, el.friendStatus)}
                        fs="15px"
                        br="8px"
                        color="#bcbcbc"
                        bc="#3a3a3a"
                        height="32px"
                        width="130px"
                      >
                        Отклонить
                      </Button>
                    </Flex>
                  ) : el.friendStatus === "none" ? (
                    <Button
                      onClick={() => handleAdd(el.id, el.friendStatus)}
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      height="32px"
                      width="150px"
                    >
                      Добавить в друзья
                    </Button>
                  ) : el.friendStatus === "friend" ? (
                    <Button
                      onClick={() => handleDelete(el.id, el.friendStatus)}
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      width="150px"
                      height="32px"
                    >
                      Удалить из друзей
                    </Button>
                  ) : el.friendStatus === "me" ? (
                    <div></div>
                  ) : (
                    <Button
                      onClick={() => handleDelete(el.id, el.friendStatus)}
                      fs="15px"
                      br="8px"
                      color="#bcbcbc"
                      bc="#3a3a3a"
                      height="32px"
                      width="200px"
                    >
                      Отменить заявку
                    </Button>
                  )}
                </Flex>
              </Area>
            ))}
          </Area>
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink
            to={"#"}
            display="flex"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
          >
            <Text fs="13px">Все</Text>
          </NavbarLink>

          <NavbarLink
            to={"#"}
            display="flex"
            width="160px"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground={true}
          >
            <Text fs="13px">Люди</Text>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
