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
} from "./PageCopy.styled";
import lens from "../img/img/lens.png";
import { useEffect, useState } from "react";
import axios from "../../utils/axios/axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { friendCreate, friendDelete } from "../../store/slices/FriendsSlise";

export function PageCopy() {
  const dispatch = useDispatch();

  const [page, setPage] = useState<any>({});

  const { id } = useParams();

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
          whom: page.id,
        });
        console.log("добавление", data);
      } catch (e: any) {
        return e.message;
      }
    }
  };

  // const handleDelete = async () => {
  //   if (page.id) {
  //     try {
  //       const res = await axios.delete(`friend/${page.id}`);

  //       console.log("удаление", res.data);
  //     } catch (e: any) {
  //       return e.message;
  //     }
  //   }
  // };

  const handleGet = async () => {
    try {
      const { data } = await axios.get("friend");
      console.log("friend", data.data);
      dispatch(friendCreate(data.data));
    } catch (e: any) {
      return e.message;
    }
  };

  const handlerequests = async () => {
    try {
      const { data } = await axios.get("friend/requests"); //запросы
      console.log("requests", data.data);
    } catch (e: any) {
      return e.message;
    }
  };
  const handleoffers = async () => {
    try {
      const { data } = await axios.get("friend/offers"); //предложения
      console.log("offers", data.data);
    } catch (e: any) {
      return e.message;
    }
  };
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
              onerror="src='../../components/img/img/avatar5.jpg'"
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
              onClick={handlerequests}
              fs="15px"
              br="8px"
              color="black"
              bc="#c8c8c8"
              height="32px"
              width="100px"
            >
              handlerequests
            </Button>
            <Button
              onClick={handleoffers}
              fs="15px"
              br="8px"
              color="black"
              bc="#c8c8c8"
              height="32px"
              width="100px"
            >
              handleoffers
            </Button>
            {/* <Button
              fs="15px"
              br="8px"
              color="black"
              bc="#c8c8c8"
              height="32px"
              width="100px"
            >
              Сообщение
            </Button> */}
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
            <Button
              // onClick={handleDelete}
              fs="15px"
              br="8px"
              color="#bcbcbc"
              bc="#3a3a3a"
              width="150px"
              height="32px"
            >
              Удалить из друзей
            </Button>
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
            <Text cursor="pointer" onClick={handleGet} fs="15px">
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
                  <Img br="50%" width="64px" height="64px" src={avatar5}></Img>
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
                  <Img br="50%" width="64px" height="64px" src={avatar5}></Img>
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
                  <Img br="50%" width="64px" height="64px" src={avatar5}></Img>
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
