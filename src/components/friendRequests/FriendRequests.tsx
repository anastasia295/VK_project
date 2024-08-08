import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import defAvatar from "../../components/img/img/defAvatar.png";
import { StyledCardСontainer, StyledCardNav } from "../friends/Friends.styled";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import axios from "../../utils/axios/axios";
import { useEffect, useState } from "react";
import { Area } from "../../ui/Area";
import { Card } from "../../share/card/Card";
import { Button } from "../../ui/Button";
import { AxiosError } from "axios";
import { TUser } from "../../types/user";

export const FriendRequests = () => {
  const [friendRequests, setFriendRequests] = useState([]);
  const [friendOffers, setFriendOffers] = useState([]);
  const [contentType, setContentType] = useState("incoming");

  useEffect(() => {
    async function fethFriend() {
      const { data } = await axios.get("friend/offers");
      setFriendOffers(data.data);
      setFriendRequests([]);
    }
    fethFriend();
  }, []);

  const handleRequests = async (type: string) => {
    try {
      const { data } = await axios.get("friend/requests");
      setFriendRequests(data.data);
      setFriendOffers([]);
      setContentType(type);
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  };

  const handleOffers = async (type: string) => {
    try {
      const { data } = await axios.get("friend/offers");
      setFriendOffers(data.data);
      setFriendRequests([]);
      setContentType(type);
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  };

  const handleAdd = async (id: number) => {
    try {
      await axios.post("friend/", {
        whom: id,
      });
      const filterFriendReq = friendRequests.filter(
        (el: TUser) => el.id !== id
      );
      const filterFriendOff = friendOffers.filter((el: TUser) => el.id !== id);
      setFriendRequests(filterFriendReq);
      setFriendOffers(filterFriendOff);
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`friend/${id}`);
      const filterFriendReq = friendRequests.filter(
        (el: TUser) => el.id !== id
      );
      const filterFriendOff = friendOffers.filter((el: TUser) => el.id !== id);
      setFriendRequests(filterFriendReq);
      setFriendOffers(filterFriendOff);
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  };

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="10px">
            <Text
              padding="5px"
              color="#dedede"
              cursor="pointer"
              isActive={contentType === "incoming"}
              onClick={() => {
                handleOffers("incoming");
              }}
              fs="15px"
            >
              Входящие
            </Text>
            <Text
              padding="5px"
              color="#dedede"
              cursor="pointer"
              isActive={contentType === "outgoing"}
              onClick={() => {
                handleRequests("outgoing");
              }}
              fs="15px"
            >
              Исходящие
            </Text>
          </Flex>
          <Area>
            {friendOffers.map(({ firstName, lastName, avatar, id }: TUser) => (
              <Area mt="15px">
                <NavbarLink to={"/" + id}>
                  <Card
                    key={id}
                    hideBorder={false}
                    firstName={firstName}
                    lastName={lastName}
                    avatar={avatar ? avatar : defAvatar}
                  >
                    <Flex display="flex" gap="20px">
                      <Button
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          e.preventDefault();
                          handleAdd(id);
                        }}
                        fs="15px"
                        br="8px"
                        color="black"
                        bc="#c8c8c8"
                        height="32px"
                        width="150px"
                      >
                        Принять заявку
                      </Button>
                      <Button
                        onClick={(e: React.MouseEvent<HTMLElement>) => {
                          e.preventDefault();
                          handleDelete(id);
                        }}
                        fs="15px"
                        br="8px"
                        color="#bcbcbc"
                        bc="#3a3a3a"
                        height="32px"
                        width="150px"
                      >
                        Отклонить заявку
                      </Button>
                    </Flex>
                  </Card>
                </NavbarLink>
              </Area>
            ))}
          </Area>
          <Area>
            {friendRequests.map(
              ({ firstName, lastName, avatar, id }: TUser) => (
                <NavbarLink to={"/" + id}>
                  <Area mt="15px">
                    <Card
                      key={id}
                      hideBorder={false}
                      firstName={firstName}
                      lastName={lastName}
                      avatar={avatar ? avatar : defAvatar}
                    >
                      <Flex display="flex" gap="20px">
                        <Flex display="flex" gap="20px">
                          <Button
                            onClick={(e: React.MouseEvent<HTMLElement>) => {
                              e.preventDefault();
                              handleDelete(id);
                            }}
                            fs="15px"
                            br="8px"
                            color="black"
                            bc="#c8c8c8"
                            height="32px"
                            width="150px"
                          >
                            Отменить
                          </Button>
                        </Flex>
                      </Flex>
                    </Card>
                  </Area>
                </NavbarLink>
              )
            )}
          </Area>
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink
            hidebackground={true}
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            to="/friends"
          >
            <Text color="#dedede" fs="13px">
              Мои друзья
            </Text>
          </NavbarLink>
          <NavbarLink
            background=" #3a3a3a"
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            to="/friendRequests"
          >
            <Text color="#dedede" fs="13px">
              Заявки в друзья
            </Text>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
