import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Input } from "../../ui/Input";
import { Text } from "../../ui/Text";
import { NavbarLink } from "../../ui/NavbarLink";
import avatar from "../../components/img/img/avatar.jpg";
import fre from "../../components/img/img/fre.png";
import {
  StyledCardBorderBottom,
  StyledCardWrapper,
  StyledCardСontainer,
  StyledCardNav,
  StyledCardFavorites,
  StyledNav,
} from "../cards/Cards.styled";
import { Img } from "../img/Img";
import { MainPage } from "../mainPage/MainPage";

export function Cards(props: {
  navCenter: string;
  name: string;
  сategoryActivity: string;
  navImportantCenter: string;
  numberSubscribers?: boolean;
  navFavoritesRight: string;
  navRight: string;
  InputCenter: boolean;
  numberSubscribers2?: string;
  numberSubscribers3?: string;
}) {
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text color="#dedede" fs="15px">
              {props.navCenter}
            </Text>
            <Text color="#dedede" fs="15px">
              {props.navImportantCenter}
            </Text>
          </Flex>
          <Area mt="20px">
            {props.InputCenter ? (
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
                  <Area position="absolute" mt="7px" ml="20px">
                    <Img src={fre} width="17px" height="17px"></Img>
                  </Area>
                </Area>
              </Flex>
            ) : (
              <Flex display="flex">
                <Input
                  bleft="1px solid #373737"
                  bbottom="1px solid #373737"
                  btop="1px solid #373737"
                  br="10px 0 0 10px"
                  padding="5px 55px 5px 10px"
                  width="468px"
                  height="34px"
                  placeholder="Поиск сообществ"
                  bc="#222222"
                  color="#6600ff"
                ></Input>
                <Area
                  bc="#2c2c2c"
                  width="48px"
                  height="34px"
                  br="0px 5px 5px 0px"
                  border="1px solid #373737"
                >
                  <Area position="absolute" mt="6px" ml="14px">
                    <Img src={fre} width="17px" height="17px"></Img>
                  </Area>
                </Area>
              </Flex>
            )}
          </Area>

          <StyledCardWrapper>
            <Flex display="flex" alignitems="center" gap="10px">
              <Img src={avatar} br="50%" width="80px" height="80px"></Img>
              <Flex display="flex" flexdirection="column" gap="">
                <Flex display="flex" flexdirection="column" gap="5px">
                  <Text color="#dedede" fs="14px">
                    {props.name}
                  </Text>
                  <Text color="#a0a0a0" fs="12px">
                    {props.сategoryActivity}
                  </Text>
                  <Text>
                    {props.numberSubscribers ? (
                      <Text color="#a0a0a0" fs="12px">
                        Количество подписчиков
                      </Text>
                    ) : (
                      <NavbarLink to="#" color="#64a1ff" fs="14px">
                        Написать сообщение
                      </NavbarLink>
                    )}
                  </Text>
                </Flex>
              </Flex>
              <Area position="absolute" mt="100px">
                <StyledCardBorderBottom></StyledCardBorderBottom>
              </Area>
            </Flex>
          </StyledCardWrapper>
          <StyledCardWrapper>
            <Flex display="flex" alignitems="center" gap="10px">
              <Img src={avatar} br="50%" width="80px" height="80px"></Img>
              <Flex display="flex" flexdirection="column" gap="">
                <Flex display="flex" flexdirection="column" gap="5px">
                  <Text color="#dedede" fs="14px">
                    {props.name}
                  </Text>
                  <Text color="#a0a0a0" fs="12px">
                    {props.сategoryActivity}
                  </Text>
                  <Text>
                    {props.numberSubscribers ? (
                      <Text color="#a0a0a0" fs="12px">
                        Количество подписчиков
                      </Text>
                    ) : (
                      <NavbarLink to="#" color="#64a1ff" fs="14px">
                        Написать сообщение
                      </NavbarLink>
                    )}
                  </Text>
                </Flex>
              </Flex>
              <Area position="absolute" mt="100px">
                <StyledCardBorderBottom></StyledCardBorderBottom>
              </Area>
            </Flex>
          </StyledCardWrapper>
          <StyledCardWrapper>
            <Flex display="flex" alignitems="center" gap="10px">
              <Img src={avatar} br="50%" width="80px" height="80px"></Img>
              <Flex display="flex" flexdirection="column" gap="">
                <Flex display="flex" flexdirection="column" gap="5px">
                  <Text color="#dedede" fs="14px">
                    {props.name}
                  </Text>
                  <Text color="#a0a0a0" fs="12px">
                    {props.сategoryActivity}
                  </Text>
                  <Text>
                    {props.numberSubscribers ? (
                      <Text color="#a0a0a0" fs="12px">
                        {props.numberSubscribers2}
                      </Text>
                    ) : (
                      <NavbarLink to="#" color="#64a1ff" fs="14px">
                        {props.numberSubscribers3}
                      </NavbarLink>
                    )}
                  </Text>
                </Flex>
              </Flex>
              <Area position="absolute" mt="100px">
                <StyledCardBorderBottom></StyledCardBorderBottom>
              </Area>
            </Flex>
          </StyledCardWrapper>
        </StyledCardСontainer>

        <StyledCardNav>
          <StyledNav>
            <Text fs="13px" color="#dedede">
              {props.navRight}
            </Text>
          </StyledNav>
          <StyledCardFavorites>
            <Text fs="13px" color="#dedede">
              {props.navFavoritesRight}
            </Text>
          </StyledCardFavorites>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
}
