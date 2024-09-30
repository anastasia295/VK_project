import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import defAvatar from "../../components/img/img/defAvatar.png";
import { StyledCardСontainer, StyledCardNav } from "../friends/Friends.styled";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import axios from "../../utils/axios/axios";
import React, { useState } from "react";
import { Area } from "../../ui/Area";
import { Card } from "../../share/card/Card";
import { Button } from "../../ui/Button";
import { TUser } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import {
  addFriend,
  deleteOffer,
  deleteRequest,
} from "../../store/slices/FriendsSlice";
import { AxiosError } from "axios";
import { socket } from "../../api/socket";

export const FriendRequests = () => {
  const [isOfferVisible, setIsOfferVisible] = useState(true);
  const [contentType, setContentType] = useState("incoming");
  const friendRequest = useSelector((state: RootState) => state.friend.request);
  const friendOffer = useSelector((state: RootState) => state.friend.offer);
  const dispatch = useDispatch();

  const handleAdd = async (id: number) => {
    try {
      await axios.post("friend/", {
        whom: id,
      });
      socket.emit("friend:add", id); /// это когда нажимаю принять или отклонить в рек или оферс
      friendOffer.forEach((el) => {
        if (el.id === id) {
          dispatch(addFriend(el));
        }
      });
      dispatch(deleteOffer({ id }));
    } catch (err: unknown) {
      const error = err as AxiosError;
      console.error(error.message);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`friend/${id}`);
      socket.emit("friend:delete", id);
      dispatch(deleteRequest({ id }));
      dispatch(deleteOffer({ id }));
    } catch (err: unknown) {
      const error = err as AxiosError;
      console.error(error.message);
    }
  };
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="10px">
            <NavbarLink
              onClick={() => {
                setContentType("incoming");
              }}
              isactive={contentType === "incoming"}
              hidebackground
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="90px"
              height="30px"
              br="5px"
              padding="8px"
              to="/friendRequests"
            >
              <Text
                onClick={() => {
                  setIsOfferVisible(true);
                }}
                padding="5px"
                color="#dedede"
                cursor="pointer"
                fs="15px"
              >
                Входящие
              </Text>
            </NavbarLink>
            <NavbarLink
              onClick={() => {
                setContentType("outgoing");
              }}
              isactive={contentType === "outgoing"}
              hidebackground
              display="flex"
              justifycontent="center"
              alignitems="center"
              width="90px"
              height="30px"
              br="5px"
              padding="8px"
              to="/friendRequests"
            >
              <Text
                onClick={() => {
                  setIsOfferVisible(false);
                }}
                padding="5px"
                color="#dedede"
                cursor="pointer"
                fs="15px"
              >
                Исходящие
              </Text>
            </NavbarLink>
          </Flex>
          <Area>
            {isOfferVisible
              ? friendOffer.map(
                  ({ firstName, lastName, avatar, id }: TUser, index) => (
                    <Area key={index} mt="15px">
                      <Card
                        id={id}
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
                    </Area>
                  )
                )
              : friendRequest.map(
                  ({ firstName, lastName, avatar, id }: TUser, index) => (
                    <Area key={index} mt="15px">
                      <Card
                        key={id}
                        id={id}
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
                  )
                )}
          </Area>
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink
            hidebackground
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
            background="#3a3a3a"
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
