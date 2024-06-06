import styled from "styled-components";
import React, { useState } from "react";

import {
  StyledPageAvatar,
  StyledPageFriends,
  StyledPagePhoto,
  StyledPagePosts,
  StyledPagePhotoPosts,
  StyledPageWall,
  StyledPageWall2,
} from "./MyPage.styled";

import { Img } from "../../components/img/Img";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Textarea } from "../../ui/Textarea";
import { Button } from "../../ui/Button";
import photo from "../../components/img/img/photo.png";
import messages from "../../components/img/img/messages.png";

import albums from "../../components/img/img/albums.png";
import communities from "../../components/img/img/communities.png";
import friends from "../../components/img/img/friends.png";

import myPage from "../../components/img/img/myPage.png";
import avatar from "../../components/img/img/avatar.jpg";
import lens from "../../components/img/img/lens.png";
import { Area } from "../../ui/Area";
import { Input } from "../../ui/Input";
import { Header } from "../header/Header";
import {
  StyledPageWrapper,
  StyledPageContainer,
} from "../../pages/Page.styled";
import { NavbarLink } from "../../ui/NavbarLink";

export function MyPage() {
  const [isTextareaVisible, setIsTextareaVisible] = useState(true);

  const onClick = () => {
    setIsTextareaVisible((prev) => !prev);
  };
  return (
    <StyledPageWrapper>
      <Header></Header>
      <StyledPageContainer>
        <Flex display="flex" flexdirection="column" gap="15px">
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={myPage}></Img>
            <NavbarLink fs="15px" color="white" to="#">
              Моя страница
            </NavbarLink>
          </Flex>
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={messages}></Img>
            <NavbarLink fs="15px" color="white" to="entrance/messages">
              Мессенджер
            </NavbarLink>
          </Flex>
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={friends}></Img>
            <NavbarLink fs="15px" color="white" to="friends">
              Друзья
            </NavbarLink>
          </Flex>
          <Flex display="flex" alignitems="center" gap="10px">
            <Img width="20px" height="20px" src={communities}></Img>
            <NavbarLink fs="15px" color="white" to="entrance/communities">
              Сообщества
            </NavbarLink>
          </Flex>
          <NavbarLink fs="14px" color="white" to="entrance">
            Вход
          </NavbarLink>
        </Flex>
        <Flex>
          <StyledPageAvatar>
            <Area ml="20px">
              <Flex display="flex" alignitems="center" gap="15px">
                <Img br="50%" width="150px" height="150px" src={avatar}></Img>
                <Area mb="35px">
                  <Text fs="35px" color="#dedede">
                    Кот Котов
                  </Text>
                </Area>
              </Flex>
            </Area>
            <Area>
              <Area mr="20px" mb="35px">
                <Flex display="flex" gap="5px">
                  <Button
                    bc="#3a3a3a"
                    color="#dedede"
                    br="8px"
                    width="198px"
                    height="32px"
                  >
                    Редактировать профиль
                  </Button>
                  <Button
                    bc="#3a3a3a "
                    color="#dedede"
                    br="8px"
                    width="82px"
                    height="32px"
                  >
                    Ещё
                  </Button>
                </Flex>
              </Area>
            </Area>
          </StyledPageAvatar>

          <Flex display="flex" justifycontent="space-between">
            <StyledPagePhotoPosts>
              <StyledPagePhoto>
                <Flex display="flex" alignitems="center" gap="20px">
                  <Flex display="flex" gap="5px" alignitems="center">
                    <Img width="20px" height="20px" src={photo}></Img>
                    <Text fs="15px" color="#dedede">
                      Фото
                    </Text>
                  </Flex>
                  <Flex display="flex" gap="5px" alignitems="center">
                    <Img width="20px" height="20px" src={albums}></Img>
                    <Text fs="15px" color="#dedede">
                      Альбомы
                    </Text>
                  </Flex>
                </Flex>

                <Area mt="30px">
                  <Flex display="flex" justifycontent="space-between">
                    <Img width="167px" height="167px" src={avatar}></Img>
                    <Img width="167px" height="167px" src={avatar}></Img>
                    <Img width="167px" height="167px" src={avatar}></Img>
                  </Flex>
                </Area>
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
              </StyledPagePhoto>

              <StyledPagePosts>
                {isTextareaVisible ? (
                  <div>
                    <Input
                      onClick={onClick}
                      border="1px solid #545454"
                      br="10px"
                      padding="5px 55px"
                      width="550px"
                      height="56px"
                      placeholder="Что у вас нового?"
                      bc="#222222"
                      color="#e9e9e9"
                    ></Input>
                    <Area position="absolute" mt="-43px" ml="20px">
                      <Img
                        br="50%"
                        width="28px"
                        height="28px"
                        src={avatar}
                      ></Img>
                    </Area>
                  </div>
                ) : (
                  <div>
                    <Textarea
                      wrap="hard"
                      border="1px solid #545454"
                      br="10px"
                      padding="15px 55px"
                      width="550px"
                      height="106px"
                      placeholder="Что у вас нового?"
                      bc="#222222"
                      color="#e9e9e9"
                      maxlength="140"
                    ></Textarea>
                    <Area position="absolute" mt="-98px" ml="20px">
                      <Img
                        br="50%"
                        width="28px"
                        height="28px"
                        src={avatar}
                      ></Img>
                    </Area>
                    <Area position="absolute" mt="-45px" ml="390px">
                      <Button
                        form="pseudoBtn"
                        color="black"
                        br="8px"
                        width="130px"
                        height="32px"
                      >
                        Опубликовать
                      </Button>
                    </Area>
                  </div>
                )}
              </StyledPagePosts>

              <StyledPageWall>
                <Flex
                  display="flex"
                  alignitems="center"
                  justifycontent="space-between"
                >
                  <Text fs="15px" color="#dedede">
                    Мои записи
                  </Text>
                  <Img width="15px" height="15px" src={lens}></Img>{" "}
                </Flex>
              </StyledPageWall>
              <StyledPageWall2></StyledPageWall2>
            </StyledPagePhotoPosts>
            <StyledPageFriends>
              <Text fs="15px" color="#dedede">
                Друзья
              </Text>

              <Area mt="15px">
                <Flex display="flex" justifycontent="space-between">
                  <Flex
                    display="flex"
                    flexdirection="column"
                    alignitems="center"
                    gap="5px"
                  >
                    <Img br="50%" width="64px" height="64px" src={avatar}></Img>
                    <Text fs="15px" color="#dedede">
                      Имя
                    </Text>
                  </Flex>

                  <Flex
                    display="flex"
                    flexdirection="column"
                    alignitems="center"
                    gap="5px"
                  >
                    <Img br="50%" width="64px" height="64px" src={avatar}></Img>
                    <Text fs="15px" color="#dedede">
                      Имя
                    </Text>
                  </Flex>
                  <Flex
                    display="flex"
                    flexdirection="column"
                    alignitems="center"
                    gap="5px"
                  >
                    <Img br="50%" width="64px" height="64px" src={avatar}></Img>
                    <Text fs="15px" color="#dedede">
                      Имя
                    </Text>
                  </Flex>
                  <Flex
                    display="flex"
                    flexdirection="column"
                    alignitems="center"
                    gap="5px"
                  >
                    <Img br="50%" width="64px" height="64px" src={avatar}></Img>
                    <Text fs="15px" color="#dedede">
                      Имя
                    </Text>
                  </Flex>
                </Flex>
              </Area>
            </StyledPageFriends>
          </Flex>
        </Flex>
      </StyledPageContainer>
    </StyledPageWrapper>
  );
}
