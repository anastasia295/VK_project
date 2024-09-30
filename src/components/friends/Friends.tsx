import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Card } from "../../share/card/Card";
import fre from "../../components/img/img/fre.png";
import defAvatar from "../../components/img/img/defAvatar.png";
import { StyledCardСontainer, StyledCardNav } from "../friends/Friends.styled";
import { Img } from "../img/Img";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import axios from "../../utils/axios/axios";
import { useEffect, useState } from "react";
import { TUser } from "../../types/user";
import { deleteFriend } from "../../store/slices/FriendsSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { DialogBox } from "../myPage/DialogBox";
import { AxiosError } from "axios";
import { socket } from "../../api/socket";

const filterFriends = (searchText: string, listOfFriends: TUser[]) => {
  if (!searchText) {
    return listOfFriends;
  }
  return listOfFriends.filter((el: TUser) => {
    const name = `${el.lastName} ${el.firstName} ${el.lastName}`;
    return name.toLowerCase().includes(searchText.toLowerCase());
  });
};

export const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector((state: RootState) => state.friend.friend);
  const [modal, setModal] = useState(false);
  const [userMessage, setUserMessage] = useState<TUser>({} as TUser);
  const [searchFriends, setSearchFriends] = useState("");
  const [friendsList, setFriendsList] = useState(friends);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredFriends = filterFriends(searchFriends, friends);
      setFriendsList(filteredFriends);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchFriends, friends]);

  const handleDelete = async (id: number) => {
    if (id) {
      try {
        await axios.delete(`friend/${id}`);
        socket.emit("friend:delete", id);
        dispatch(deleteFriend({ id }));
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
  };

  const writeMessage = async (el: TUser) => {
    setModal(true);
    setUserMessage(el);
  };

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text color="#dedede" fs="15px">
              Все друзья
            </Text>
            <Text color="#dedede" fs="15px">
              Важные друзья
            </Text>
          </Flex>
          <Area mt="20px">
            <Flex display="flex">
              <Input
                value={searchFriends}
                onChange={(event) => {
                  setSearchFriends(event.target.value);
                }}
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

          {friendsList.map((el: TUser, index) => (
            <Area key={index} mt="15px">
              <Card
                id={el.id}
                firstName={el.firstName}
                lastName={el.lastName}
                avatar={el.avatar ? el.avatar : defAvatar}
              >
                <Flex display="flex" gap="20px">
                  <Text
                    onClick={() => writeMessage(el)}
                    color="#64a1ff"
                    fs="13px"
                  >
                    Написать сообщение
                  </Text>
                  <Text
                    onClick={() => handleDelete(el.id)}
                    color="#64a1ff"
                    fs="13px"
                  >
                    Удалить из друзей
                  </Text>
                </Flex>
              </Card>
            </Area>
          ))}

          <DialogBox
            userMessage={userMessage}
            setModal={setModal}
            open={modal}
          ></DialogBox>
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            background="#3a3a3a"
            to="/friends"
          >
            <Text color="#dedede" fs="13px">
              Мои друзья
            </Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            hidebackground
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
