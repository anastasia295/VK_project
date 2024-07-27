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
} from "./PageFriend.styled";
import lens from "../img/img/lens.png";
import { useEffect, useState } from "react";
import axios from "../../utils/axios/axios";
import { useParams } from "react-router-dom";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";
import { useDispatch, useSelector } from "react-redux";
import { NavbarLink } from "../../ui/NavbarLink";

export function PageFriend() {
  const dispatch = useDispatch();
  const [page, setPage] = useState<any>({});
  const friend = useSelector(
    (state: RootState) => state.friend.user
  ) as TUser[];
  const { id } = useParams();

  console.log("friend", friend);

  const ids = friend ? friend.map(({ id }) => id) : [];

  useEffect(() => {
    async function fethUser() {
      if (id) {
        try {
          const res = await axios.get(`user/${id}`);
          setPage(res.data.data);
        } catch (e: any) {
          return e.message;
        }
      }
    }
    fethUser();
  }, [id]);

  const handleAdd = async () => {
    if (page.id) {
      try {
        const { data } = await axios.post("friend/", {
          whom: id,
        });
        console.log("добавление", data.data);
      } catch (e: any) {
        return e.message;
      }
    }
  };

  const handleDelete = async () => {
    if (page.id) {
      try {
        const res = await axios.delete(`friend/${id}`);

        console.log("удаление", res.data);
      } catch (e: any) {
        return e.message;
      }
    }
  };

  // useEffect(() => {
  //   async function handleGet() {
  //     try {
  //       const { data } = await axios.get(`friend/${16}`);
  //       console.log(data.data);
  //     } catch (e: any) {
  //       return e.message;
  //     }
  //   }
  //   handleGet();
  // }, [dispatch]);

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
            {ids?.includes(page.id) ? (
              <Button
                onClick={handleDelete}
                fs="15px"
                br="8px"
                color="#bcbcbc"
                bc="#3a3a3a"
                width="150px"
                height="32px"
              >
                Удалить из друзей
              </Button>
            ) : (
              <Button
                fs="15px"
                br="8px"
                color="#bcbcbc"
                bc="#3a3a3a"
                height="32px"
                width="150px"
                onClick={handleAdd}
              >
                Добавить в друзья
              </Button>
            )}
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
            </StyledPagePhoto>
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
          </StyledPagePhotoPosts>
          <StyledPageFriends>
            <Text fs="15px">Друзья</Text>
            <Area mt="15px">
              {/* <Flex display="flex" gap="10px">
                {friend?.map((el: any) => {
                  return (
                    <NavbarLink to={"/user/" + el.id}>
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
              </Flex> */}
              <Flex display="flex" justifycontent="space-between">
                <Flex
                  display="flex"
                  flexdirection="column"
                  alignitems="center"
                  gap="5px"
                >
                  <Img br="50%" width="64px" height="64px" src={avatar5}></Img>
                  <Text fs="15px" color="#dedede">
                    Имя
                  </Text>
                </Flex>
              </Flex>
            </Area>
          </StyledPageFriends>
        </Flex>
      </Flex>
    </MainPage>
  );
}
