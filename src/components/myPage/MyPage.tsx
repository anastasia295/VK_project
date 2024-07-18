import {
  StyledPageAvatar,
  StyledPageFriends,
  StyledPagePhoto,
  StyledPagePhotoPosts,
} from "./MyPage.styled";
import { Img } from "../img/Img";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Button } from "../../ui/Button";
import photo from "../../components/img/img/photo-wall.png";
import albums from "../../components/img/img/albums.png";
import avatar5 from "../../components/img/img/avatar5.jpg";
import { Area } from "../../ui/Area";
import { MainPage } from "../mainPage/MainPage";
import Posts from "../wall/Wall";
import { NavbarLink } from "../../ui/NavbarLink";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";
import defAvatar from "../../components/img/img/defAvatar.png";

export function MyPage() {
  const user = useSelector((state: RootState) => state.auth.user) as TUser;
  const { firstName, lastName, status, avatar } = user;

  return (
    <MainPage>
      <Flex display="flex" flexdirection="column" gap="15px">
        <StyledPageAvatar>
          <Area ml="20px">
            <Flex display="flex" alignitems="center" gap="15px">
              <Img
                br="50%"
                width="150px"
                height="150px"
                src={avatar ? avatar : defAvatar}
              ></Img>
              <Area mb="35px ">
                <Text fs="35px" color="#dedede">
                  {firstName} {lastName}
                </Text>
                <Area ml="2px">
                  <Text color="#dedede" fs="13px">
                    {status}
                  </Text>
                </Area>
              </Area>
            </Flex>
          </Area>
          <Area>
            <Area mr="20px" mb="35px">
              <Flex display="flex" gap="5px">
                <NavbarLink to="/editing">
                  <Button
                    bc="#3a3a3a"
                    color="#dedede"
                    br="8px"
                    width="198px"
                    height="32px"
                  >
                    Редактировать профиль
                  </Button>
                </NavbarLink>
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
            <Posts></Posts>
          </StyledPagePhotoPosts>
          <StyledPageFriends>
            <Text fs="15px">Друзья</Text>
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
