import { MainPage } from "../mainPage/MainPage";
import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Img } from "../img/Img";
import loupe5 from "../../components/img/img/loupe5.png";
import defAvatar from "../../components/img/img/defAvatar.png";
import {
  StyledMessagesСontainer,
  StyledMessagesContent,
  StyledCardNav,
} from "../messages/Messages.styled";
import { Card } from "../../share/card/Card";
import { NavbarLink } from "../../ui/NavbarLink";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TMessage } from "../../types/message";
import { useEffect, useState } from "react";

const filterMessages = (searchText: string, listOfMessages: TMessage[]) => {
  if (!searchText) {
    return listOfMessages;
  }
  return listOfMessages.filter((el: TMessage) => {
    const name = `${el.user.lastName} ${el.user.firstName} ${el.user.lastName}`;
    return name.toLowerCase().includes(searchText.toLowerCase());
  });
};

export const Messages = () => {
  const arrMessages = useSelector(
    (state: RootState) => state.messages.messages
  );
  const [searchMessages, setSearchMessages] = useState("");
  const [messagesList, setMessagesList] = useState(arrMessages);

  useEffect(() => {
    const debounce = setTimeout(() => {
      const filteredMessages = filterMessages(searchMessages, arrMessages);
      setMessagesList(filteredMessages);
    }, 1000);
    return () => clearTimeout(debounce);
  }, [searchMessages, arrMessages]);

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledMessagesСontainer>
          <Input
            value={searchMessages}
            onChange={(event) => {
              setSearchMessages(event.target.value);
            }}
            bbottom="1px solid #373737"
            btop="1px solid #373737"
            br="10px 10px 0px 0px"
            padding="5px 55px"
            width="548px"
            height="56px"
            placeholder="Поиск"
            bc="#222222"
            color="#e9e9e9"
          ></Input>
          <Area position="absolute" mt="-38px" ml="20px">
            <Img src={loupe5} width="20px" height="20px"></Img>
          </Area>
          {messagesList.map(({ lastMessage, user }: TMessage, index) => (
            <NavbarLink key={index} to={"/dialogue/" + user.id}>
              <StyledMessagesContent>
                <Card
                  id={user.id}
                  firstName={user.firstName}
                  lastName={user.lastName}
                  avatar={user.avatar ? user.avatar : defAvatar}
                  hideborder
                >
                  <Flex display="flex" alignitems="center" gap="5px">
                    <Img
                      br="50%"
                      src={
                        lastMessage.user.avatar
                          ? lastMessage.user.avatar
                          : defAvatar
                      }
                      width="30px"
                      height="30px"
                    ></Img>
                    <Area height="16px" width="350px">
                      <Text
                        whitespace="nowrap"
                        overflow="hidden"
                        textoverflow="ellipsis"
                        color="#a0a0a0"
                        fs="14px"
                      >
                        {lastMessage.message}
                      </Text>
                    </Area>
                  </Flex>
                </Card>
              </StyledMessagesContent>
            </NavbarLink>
          ))}
        </StyledMessagesСontainer>

        <StyledCardNav>
          <NavbarLink
            background=" #3a3a3a"
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            to={"#"}
          >
            <Text fs="13px">Все чаты</Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            to={"#"}
            hidebackground
          >
            <Text fs="13px">Избранные чаты</Text>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
