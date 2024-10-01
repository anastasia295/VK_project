import { Img } from "../img/Img";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Button } from "../../ui/Button";
import photo from "../../components/img/img/photo-wall.png";
import albums from "../../components/img/img/albums.png";
import avatar5 from "../../components/img/img/avatar5.jpg";
import defAvatar from "../../components/img/img/defAvatar.png";
import { Area } from "../../ui/Area";
import { MainPage } from "../mainPage/MainPage";
import {
  StyledPageAvatar,
  StyledPageFriends,
  StyledPagePhoto,
  StyledPagePhotoPosts,
  StyledPageRecords,
  StyledPageWall,
} from "./MyPage.styled";
import lens from "../img/img/lens.png";
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios/axios";
import { useParams } from "react-router-dom";
import { NavbarLink } from "../../ui/NavbarLink";
import Posts from "../wall/Wall";
import { TFriendStatus, TFriendStatusAll, TUser } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { updatePage } from "../../store/slices/PageSlice";
import { socket } from "../../api/socket";
import { getLastOnline } from "../../utils/getLastOnline";
import { BlankPage } from "./BlankPage";
import { DialogBox } from "./DialogBox";
import { AxiosError } from "axios";
import {
  addFriend,
  addFriendsFriend,
  addRequest,
  deleteFriend,
  deleteFriendsFriend,
  deleteOffer,
  deleteRequest,
  updateFriendsFriend,
} from "../../store/slices/FriendsSlice";

const BUTTON_TEXT_MAP: Record<TFriendStatus, string | null> = {
  request: "Отменить заявку",
  offer: "Принять заявку",
  none: "Добавить в друзья",
  friend: "Удалить из друзей",
};

const isAddFriend = (status: TFriendStatus): boolean =>
  ["offer", "none"].includes(status);

export const MyPage = () => {
  const userPage = useSelector((state: RootState) => state.page.page) as TUser;
  const user = useSelector((state: RootState) => state.auth.user) as TUser;
  const friendsMe = useSelector((state: RootState) => state.friend.friend);
  const friendsFriend = useSelector(
    (state: RootState) => state.friend.friendsFriend
  );
  const [modal, setModal] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    async function fethUser() {
      if (id) {
        try {
          const { data } = await axios.get(`user/${id}`);
          dispatch(updatePage(data.data));
          dispatch(updateFriendsFriend(data.data.friends));
        } catch (err: unknown) {
          const error = err as AxiosError;
          console.error(error.message);
        }
      }
    }
    fethUser();
  }, [id, dispatch]);

  const handleAdd = async () => {
    if (userPage) {
      try {
        await axios.post("friend/", {
          whom: id,
        });
        socket.emit("friend:add", userPage.id);
        dispatch(addRequest(userPage));
        dispatch(deleteOffer({ id: userPage.id }));
        if (userPage.friendStatus === "none") {
          dispatch(updatePage({ ...userPage, friendStatus: "request" }));
        } else if (userPage.friendStatus === "offer") {
          dispatch(addFriend(userPage));
          dispatch(addFriendsFriend(user));
          dispatch(updatePage({ ...userPage, friendStatus: "friend" }));
        }
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
  };

  const handleDelete = async () => {
    if (userPage) {
      try {
        await axios.delete(`friend/${id}`);
        socket.emit("friend:delete", userPage.id);
        dispatch(deleteRequest({ id: userPage.id }));
        dispatch(deleteOffer({ id: userPage.id }));
        dispatch(deleteFriend({ id: userPage.id }));
        dispatch(updatePage({ ...userPage, friendStatus: "none" }));
        dispatch(deleteFriendsFriend({ id: user.id }));
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
  };

  const renderButtons = (status: TFriendStatusAll) => {
    if (status === "me") {
      return (
        <Flex display="flex" gap="5px">
          <NavbarLink to="/editing">
            <Button
              bc="#3a3a3a"
              color="#dedede"
              br="8px"
              fs="16px"
              width="220px"
              height="32px"
            >
              Редактировать профиль
            </Button>
          </NavbarLink>
        </Flex>
      );
    }
    return (
      <Flex display="flex" gap="5px">
        <Button
          onClick={() => {
            setModal(true);
          }}
          fs="15px"
          br="8px"
          color="black"
          bc="#c8c8c8"
          height="32px"
          width="100px"
        >
          Сообщение
        </Button>
        <Button
          onClick={isAddFriend(status) ? handleAdd : handleDelete}
          fs="15px"
          br="8px"
          color="black"
          bc="#c8c8c8"
          height="32px"
          width="150px"
        >
          {BUTTON_TEXT_MAP[status]}
        </Button>
        {status === "offer" && (
          <Button
            onClick={handleDelete}
            fs="15px"
            br="8px"
            color="black"
            bc="#c8c8c8"
            height="32px"
            width="150px"
          >
            Отклонить заявку
          </Button>
        )}
      </Flex>
    );
  };

  if (!userPage) {
    return <BlankPage></BlankPage>;
  }

  const isMe = userPage.friendStatus === "me";

  return (
    <MainPage>
      <Flex display="flex" flexdirection="column" gap="15px">
        <StyledPageAvatar>
          <Flex display="flex" alignitems="center" gap="15px">
            <Img
              br="50%"
              width="150px"
              height="150px"
              src={userPage.avatar ? userPage.avatar : defAvatar}
            ></Img>
            <Flex>
              <Text fs="35px" color="#dedede">
                {userPage.firstName} {userPage.lastName}
              </Text>
              <Text color="#dedede" fs="13px">
                {userPage.status}
              </Text>
              {userPage.isOnline === true || isMe ? (
                <Text color="#dedede" fs="13px">
                  Онлайн
                </Text>
              ) : userPage.isOnline === null ? (
                <></>
              ) : (
                <Text color="#dedede" fs="13px">
                  {getLastOnline(userPage.lastOnline, userPage.gender)}
                </Text>
              )}
            </Flex>
          </Flex>
          <Flex display="flex" gap="5px">
            {userPage.friendStatus && renderButtons(userPage.friendStatus)}
          </Flex>
        </StyledPageAvatar>

        <Flex display="flex" justifycontent="space-between">
          <StyledPagePhotoPosts>
            <StyledPagePhoto>
              <Flex display="flex" alignitems="center" gap="20px">
                <Flex display="flex" gap="10px" alignitems="center">
                  <Img width="20px" height="20px" src={photo}></Img>
                  <Text fs="15px" color="#696968">
                    Фото
                  </Text>
                </Flex>
                <Flex display="flex" gap="10px" alignitems="center">
                  <Img width="20px" height="20px" src={albums}></Img>
                  <Text fs="15px" color="#696968">
                    Альбомы
                  </Text>
                </Flex>
              </Flex>
              <Area mt="30px">
                <Flex display="flex" justifycontent="space-between">
                  <Img width="167px" height="167px" src={avatar5}></Img>
                  <Img width="167px" height="167px" src={avatar5}></Img>
                  <Img width="167px" height="167px" src={avatar5}></Img>
                </Flex>
              </Area>
              {isMe && (
                <Area mt="60px">
                  <Flex display="flex" justifycontent="space-between">
                    <Button
                      bc="#3a3a3a "
                      color="#dedede"
                      br="8px"
                      width="251px"
                      height="32px"
                    >
                      Загрузить фото
                    </Button>
                    <Button
                      bc="#3a3a3a "
                      color="#dedede"
                      br="8px"
                      width="251px"
                      height="32px"
                    >
                      Показать всё
                    </Button>
                  </Flex>
                </Area>
              )}
            </StyledPagePhoto>
            {isMe ? (
              <Posts></Posts>
            ) : (
              <>
                <StyledPageWall>
                  <Flex
                    display="flex"
                    alignitems="center"
                    justifycontent="space-between"
                  >
                    <Text fs="15px">Записи</Text>
                    <Img width="16px" height="16px" src={lens}></Img>
                  </Flex>
                </StyledPageWall>
                <StyledPageRecords></StyledPageRecords>
              </>
            )}
            <DialogBox
              userMessage={userPage}
              setModal={setModal}
              open={modal}
            ></DialogBox>
          </StyledPagePhotoPosts>

          <StyledPageFriends>
            {isMe ? (
              <>
                <NavbarLink to={"/friends"}>
                  <Text fs="15px">Друзья</Text>
                </NavbarLink>
                <Area mt="15px">
                  <Flex display="flex" gap="10px">
                    {friendsMe?.map((el: TUser, index) => {
                      return (
                        <Flex
                          key={index}
                          display="flex"
                          flexdirection="column"
                          alignitems="center"
                          gap="5px"
                        >
                          <Img
                            br="50%"
                            width="64px"
                            height="64px"
                            src={el.avatar ? el.avatar : defAvatar}
                          ></Img>
                          <NavbarLink key={el.id} to={"/" + el.id}>
                            <Text fs="15px" color="#dedede">
                              {el.lastName}
                            </Text>
                          </NavbarLink>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Area>
              </>
            ) : (
              <>
                <NavbarLink to={"/" + id + "/friends"}>
                  <Text fs="15px">Друзья</Text>
                </NavbarLink>
                <Area mt="15px">
                  <Flex display="flex" gap="10px">
                    {friendsFriend?.map((el: TUser, index) => {
                      return (
                        <Flex
                          key={index}
                          display="flex"
                          flexdirection="column"
                          alignitems="center"
                          gap="5px"
                        >
                          <Img
                            br="50%"
                            width="64px"
                            height="64px"
                            src={el.avatar ? el.avatar : defAvatar}
                          ></Img>
                          <NavbarLink key={el.id} to={"/" + el.id}>
                            <Text fs="15px" color="#dedede">
                              {el.lastName}
                            </Text>
                          </NavbarLink>
                        </Flex>
                      );
                    })}
                  </Flex>
                </Area>
              </>
            )}
          </StyledPageFriends>
        </Flex>
      </Flex>
    </MainPage>
  );
};
