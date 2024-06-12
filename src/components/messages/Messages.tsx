import { MainPage } from "../mainPage/MainPage";
import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Img } from "../img/Img";
import loupe5 from "../../components/img/img/loupe5.png";
import {
  StyledMessagesСontainer,
  StyledMessagesContent,
  StyledBorderBottom,
  StyledCardNav,
  StyledNav,
  StyledCardFavorites,
} from "../messages/Messages.styled";
import { Card } from "../../share/card/Card";
import { NavbarLink } from "../../ui/NavbarLink";

const data = [
  { name: "Кот Котов", message: "Сообщение" },
  { name: "Кот Котов", message: "Сообщение" },
  { name: "Кот Котов", message: "Сообщение" },
];

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
          <Area position="absolute" mt="-38px" ml="20px">
            <Img src={loupe5} width="20px" height="20px"></Img>
          </Area>
          {data.map(({ name, message }) => (
            <NavbarLink to="/Dialogue">
              <StyledMessagesContent>
                <Card name={name}>
                  <Text color="#a0a0a0" fs="12px">
                    {message}
                  </Text>
                  <StyledBorderBottom></StyledBorderBottom>
                </Card>
              </StyledMessagesContent>
            </NavbarLink>
          ))}
        </StyledMessagesСontainer>

        <StyledCardNav>
          <StyledNav>
            <Text fs="13px" color="#dedede">
              Все чаты
            </Text>
          </StyledNav>
          <StyledCardFavorites>
            <Text fs="13px" color="#dedede">
              Избранные чаты
            </Text>
          </StyledCardFavorites>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
}
