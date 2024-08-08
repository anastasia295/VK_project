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
import { useEffect, useState } from "react";
import axios from "../../utils/axios/axios";
import { useParams } from "react-router-dom";
import { NavbarLink } from "../../ui/NavbarLink";
import Posts from "../wall/Wall";
import React from "react";
import { TFriendStatus, TFriendStatusAll, TUser } from "../../types/user";
import { AxiosError } from "axios";

const BUTTON_TEXT_MAP: Record<TFriendStatus, string | null> = {
  request: "Отменить заявку",
  offer: "Принять заявку",
  none: "Добавить в друзья",
  friend: "Удалить из друзей",
};

const isAddFriend = (status: TFriendStatus): boolean =>
  ["offer", "none"].includes(status);

export const MyPage = () => {
  const [page, setPage] = useState<TUser | null>(null);
  const [friendStatus, setFriendStatus] = useState<
    TFriendStatusAll | undefined
  >(page?.friendStatus);

  const { id } = useParams();

  useEffect(() => {
    async function fethUser() {
      if (id) {
        try {
          const { data } = await axios.get(`user/${id}`);
          setPage(data.data);
          setFriendStatus(data.data.friendStatus);
        } catch (error) {
          throw new Error((error as AxiosError).message);
        }
      }
    }
    fethUser();
  }, [id]);

  const handleAdd = async () => {
    if (page) {
      try {
        await axios.post("friend/", {
          whom: id,
        });
        if (friendStatus === "none") {
          setFriendStatus("request");
        } else if (friendStatus === "offer") {
          setFriendStatus("friend");
        }
      } catch (error) {
        throw new Error((error as AxiosError).message);
      }
    }
  };

  const handleDelete = async () => {
    if (page) {
      try {
        await axios.delete(`friend/${id}`);
        setFriendStatus("none");
      } catch (error) {
        throw new Error((error as AxiosError).message);
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
              width="198px"
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

  if (!page) {
    return null;
  }

  return (
    <MainPage>
      <Flex display="flex" flexdirection="column" gap="15px">
        <StyledPageAvatar>
          <Flex display="flex" alignitems="center" gap="15px">
            <Img
              br="50%"
              width="150px"
              height="150px"
              src={page.avatar ? page.avatar : defAvatar}
            ></Img>
            <Flex>
              <Text fs="35px" color="#dedede">
                {page.firstName} {page.lastName}
              </Text>
              <Text color="#dedede" fs="13px">
                {page.status}
              </Text>
            </Flex>
          </Flex>
          <Flex display="flex" gap="5px">
            {friendStatus && renderButtons(friendStatus)}
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
              {friendStatus === "me" && (
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
            {friendStatus === "me" ? (
              <Posts></Posts>
            ) : (
              <React.Fragment>
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
              </React.Fragment>
            )}
          </StyledPagePhotoPosts>
          <StyledPageFriends>
            {friendStatus === "me" ? (
              <NavbarLink to={"/friends"}>
                <Text fs="15px">Друзья</Text>
              </NavbarLink>
            ) : (
              <NavbarLink to={"/" + id + "/friends"}>
                <Text fs="15px">Друзья</Text>
              </NavbarLink>
            )}
            <Area mt="15px">
              <Flex display="flex" gap="10px">
                {page.friends?.map((el: TUser) => {
                  return (
                    <NavbarLink key={el.id} to={"/" + el.id}>
                      <Flex
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
                        <Text fs="15px" color="#dedede">
                          {el.lastName}
                        </Text>
                      </Flex>
                    </NavbarLink>
                  );
                })}
              </Flex>
            </Area>
          </StyledPageFriends>
        </Flex>
      </Flex>
    </MainPage>
  );
};
