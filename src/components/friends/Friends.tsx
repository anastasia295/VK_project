import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Card } from "../../share/card/Card";
import fre from "../../components/img/img/fre.png";
import {
  StyledCardСontainer,
  StyledCardNav,
  StyledNav,
  StyledCardFavorites,
} from "../friends/Friends.styled";
import { Img } from "../img/Img";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import { StyledBorderBottom } from "./Friends.styled";

const data = [
  { name: "Кот Котов", category: "Кошачий университет" },
  { name: "Кот Котов", category: "Котейкин колледж" },
  { name: "Кот Котов", category: "Школа для котов" },
];

export function Friends() {
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
          {data.map(({ name, category }) => (
            <Area mt="15px">
              <Card name={name}>
                <Text color="#a0a0a0" fs="12px">
                  {category}
                </Text>
                <NavbarLink to="#" color="#64a1ff" fs="13px">
                  Написать сообщение
                </NavbarLink>
                <StyledBorderBottom></StyledBorderBottom>
              </Card>
            </Area>
          ))}
        </StyledCardСontainer>
        <StyledCardNav>
          <StyledNav>
            <Text fs="13px" color="#dedede">
              Мои друзья
            </Text>
          </StyledNav>
          <StyledCardFavorites>
            <Text fs="13px" color="#dedede">
              Избранные друзья
            </Text>
          </StyledCardFavorites>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
}
