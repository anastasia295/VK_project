import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import defAvatar from "../../components/img/img/defAvatar.png";
import {
  StyledCardСontainer,
  StyledCardNav,
  StyledNav,
  StyledCardFavorites,
} from "../friends/Friends.styled";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import axios from "../../utils/axios/axios";
import { useState } from "react";
import { Area } from "../../ui/Area";
import { Card } from "../../share/card/Card";
import { Button } from "../../ui/Button";

export function FriendRequests() {
  const [frendReq, setFriendReq] = useState<any>([]);
  const [frendOff, setFriendOff] = useState<any>([]);
  const [obj] = useState<any>({});

  const handleRequests = async () => {
    try {
      const { data } = await axios.get("friend/requests"); //запросы
      console.log("requests", data.data);
      setFriendReq(data.data);
      setFriendOff([]);
    } catch (e: any) {
      return e.message;
    }
  };
  const handleOffers = async () => {
    try {
      const { data } = await axios.get("friend/offers"); //предложения
      console.log("offers", data.data);
      setFriendOff(data.data);
      setFriendReq([]);
    } catch (e: any) {
      return e.message;
    }
  };

  const handleAdd = async () => {
    try {
      frendOff.forEach((el: any) => {
        obj.id = el.id;
      });
      const { data } = await axios.post("friend/", {
        whom: obj.id,
      });
      console.log("добавление", data);
    } catch (e: any) {
      return e.message;
    }
  };
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text cursor="pointer" onClick={handleOffers} fs="15px">
              Входящие
            </Text>
            <Text cursor="pointer" onClick={handleRequests} fs="15px">
              Исходящие
            </Text>
          </Flex>
          <Area>
            {frendOff.map(({ firstName, lastName, avatar, id }: any) => (
              <NavbarLink to={"/user/" + id}>
                <Area mt="15px">
                  <Card
                    hideBorder={false}
                    firstName={firstName}
                    lastName={lastName}
                    avatar={avatar ? avatar : defAvatar}
                  >
                    <Flex display="flex" gap="20px">
                      <Button
                        onClick={handleAdd}
                        fs="15px"
                        br="8px"
                        color="black"
                        bc="#c8c8c8"
                        height="32px"
                        width="150px"
                      >
                        Принять заявку
                      </Button>
                      <Button
                        fs="15px"
                        br="8px"
                        color="#bcbcbc"
                        bc="#3a3a3a"
                        height="32px"
                        width="150px"
                      >
                        Отклонить заявку
                      </Button>
                    </Flex>
                  </Card>
                </Area>
              </NavbarLink>
            ))}
          </Area>
          <Area>
            {frendReq.map(({ firstName, lastName, avatar }: any) => (
              <Area mt="15px">
                <Card
                  hideBorder={false}
                  firstName={firstName}
                  lastName={lastName}
                  avatar={avatar ? avatar : defAvatar}
                >
                  <Flex display="flex" gap="20px">
                    <Button
                      onClick={handleAdd}
                      fs="15px"
                      br="8px"
                      color="black"
                      bc="#c8c8c8"
                      height="32px"
                      width="150px"
                    >
                      Отменить
                    </Button>
                  </Flex>
                </Card>
              </Area>
            ))}
          </Area>
        </StyledCardСontainer>
        <StyledCardNav>
          <NavbarLink to="/friends">
            <StyledNav>
              <Text fs="13px">Мои друзья</Text>
            </StyledNav>
          </NavbarLink>
          <NavbarLink to="/friendRequests">
            <StyledCardFavorites>
              <Text fs="13px">Заявки в друзья</Text>
            </StyledCardFavorites>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
}
