import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Input } from "../../ui/Input";
import { Text } from "../../ui/Text";
import { Img } from "../img/Img";
import fre from "../../components/img/img/fre.png";
import defAvatar from "../../components/img/img/defAvatar.png";
import { MainPage } from "../mainPage/MainPage";
import {
  StyledCardFavorites,
  StyledCardNav,
  StyledCardСontainer,
  StyledNav,
} from "./Search.styled";
import axios from "../../utils/axios/axios";
import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { NavbarLink } from "../../ui/NavbarLink";
import { Button } from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";
import { updateUserNew } from "../../store/slices/NewSlice";

export const Search: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const user = useSelector((state: RootState) => state.newauth.user) as TUser[];

  useEffect(() => {
    async function fethUser() {
      if (searchValue) {
        try {
          const { data } = await axios.get(`user/search?key=${searchValue}`);
          dispatch(updateUserNew(data.data));
        } catch (e: any) {
          return e.message;
        }
      }
    }
    fethUser();
  }, [searchValue, dispatch]);

  const handleSearch = (value: any) => {
    setSearchValue(value);
  };

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledCardСontainer>
          <Flex display="flex" gap="15px">
            <Text fs="17px">Поиск</Text>
          </Flex>

          <Area mt="20px">
            <Flex display="flex">
              <Input
                type="search"
                onChange={debounce(
                  (e: any) => handleSearch(e.target.value),
                  2000
                )}
                bleft="1px solid #373737"
                bbottom="1px solid #373737"
                btop="1px solid #373737"
                br="10px 0 0 10px"
                padding="5px 55px 5px 10px"
                width="100%"
                height="34px"
                placeholder="Введите запрос"
                bc="#222222"
                color="#e9e9e9"
              ></Input>
              <Area
                bc="#2c2c2c"
                width="40px"
                height="34px"
                br="0px 5px 5px 0px"
                border="1px solid #373737"
              >
                <Area position="absolute" mt="6px" ml="10px">
                  <Img src={fre} width="17px" height="17px"></Img>
                </Area>
              </Area>
            </Flex>
          </Area>
          <Area mt="20px">
            <Text fs="14px">Люди</Text>
            {user.map((el: any) => (
              <NavbarLink to={"/user/" + el.id}>
                <Area mt="15px">
                  <Flex
                    display="flex"
                    alignitems="center"
                    justifycontent="space-between"
                  >
                    <Flex display="flex" alignitems="center" gap="10px">
                      <Img
                        br="50%"
                        width="80px"
                        height="80px"
                        src={el.avatar ? el.avatar : defAvatar}
                      ></Img>
                      <Flex display="flex" flexdirection="column" gap="10px">
                        <Text cursor="pointer" fs="14px">
                          {el.lastName} {el.firstName}
                        </Text>
                        <Text>{el.status}</Text>
                        <NavbarLink to="#" color="#64a1ff" fs="13px">
                          Написать сообщение
                        </NavbarLink>
                      </Flex>
                    </Flex>

                    <Button
                      br="8px"
                      width="134px"
                      height="28px"
                      bc="#3f3f3f"
                      fs="12px"
                    >
                      Добавить в друзья
                    </Button>
                  </Flex>
                </Area>
              </NavbarLink>
            ))}
          </Area>
        </StyledCardСontainer>
        <StyledCardNav>
          <StyledNav>
            <Text fs="13px">Все</Text>
          </StyledNav>
          <StyledCardFavorites>
            <Text fs="13px">Люди</Text>
          </StyledCardFavorites>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
