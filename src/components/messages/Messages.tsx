import { MainPage } from "../mainPage/MainPage";
import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Img } from "../img/Img";
import loupe5 from "../../components/img/img/loupe5.png";
import avatar from "../../components/img/img/avatar.jpg";
import {
  StyledMessagesСontainer,
  StyledMessagesNav,
  BorderBottom,
  StyledMessagesWrapper,
  StyledAllChats,
} from "../messages/Messages.styled";

export function Messages() {
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledMessagesСontainer>
          <Input
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
          <Area position="absolute" mt="-46px" ml="20px">
            <Img src={loupe5} width="20px" height="20px"></Img>
          </Area>

          <StyledMessagesWrapper>
            <Flex display="flex" alignitems="center" gap="10px">
              <Img src={avatar} br="50%" width="50px" height="50px"></Img>
              <Flex display="flex" flexdirection="column" gap="">
                <Flex display="flex" flexdirection="column" gap="7px">
                  <Text color="#dedede" fs="14px">
                    Кот Котов
                  </Text>
                  <Text color="#dedede" fs="12px">
                    Сообщение
                  </Text>
                </Flex>
                <Area position="absolute" mt="52px">
                  <BorderBottom></BorderBottom>
                </Area>
              </Flex>
            </Flex>
          </StyledMessagesWrapper>
          <StyledMessagesWrapper>
            <Flex display="flex" alignitems="center" gap="10px">
              <Img src={avatar} br="50%" width="50px" height="50px"></Img>
              <Flex display="flex" flexdirection="column" gap="">
                <Flex display="flex" flexdirection="column" gap="7px">
                  <Text color="#dedede" fs="14px">
                    Кот Котов
                  </Text>
                  <Text color="#dedede" fs="12px">
                    Сообщение
                  </Text>
                </Flex>
                <Area position="absolute" mt="52px">
                  <BorderBottom></BorderBottom>
                </Area>
              </Flex>
            </Flex>
          </StyledMessagesWrapper>
          <StyledMessagesWrapper>
            <Flex display="flex" alignitems="center" gap="10px">
              <Img src={avatar} br="50%" width="50px" height="50px"></Img>
              <Flex display="flex" flexdirection="column" gap="">
                <Flex display="flex" flexdirection="column" gap="7px">
                  <Text color="#dedede" fs="14px">
                    Кот Котов
                  </Text>
                  <Text color="#dedede" fs="12px">
                    Сообщение
                  </Text>
                </Flex>
                <Area position="absolute" mt="52px">
                  <BorderBottom></BorderBottom>
                </Area>
              </Flex>
            </Flex>
          </StyledMessagesWrapper>
        </StyledMessagesСontainer>
        <StyledMessagesNav>
          <StyledAllChats>
            <Text fs="13px" color="#dedede">
              Все чаты
            </Text>
          </StyledAllChats>
          <StyledAllChats>
            <Text fs="13px" color="#dedede">
              Избранные чаты
            </Text>
          </StyledAllChats>
        </StyledMessagesNav>
      </Flex>
    </MainPage>
  );
}
