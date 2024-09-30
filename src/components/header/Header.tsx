import { Flex } from "../../ui/Flex";
import { Img } from "../../components/img/Img";
import { Area } from "../../ui/Area";
import { Text } from "../../ui/Text";
import logo_vk from "../img/img/logo_vk.png";
import arrow from "../img/img/arrow.png";
import loupe from "../img/img/loupe.png";
import {
  StyledBlockSearch,
  StyledChangedInput,
  StyledHeader,
  StyledHeaderContainer,
  StyledLoader,
  StyledSearchWrapper,
} from "./Header.styled";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import debounce from "lodash/debounce";
import { TUser } from "../../types/user";
import defAvatar from "../../components/img/img/defAvatar.png";
import React, { useEffect, useState } from "react";
import { NavbarLink } from "../../ui/NavbarLink";
import { socket } from "../../api/socket";
import { useDispatch } from "react-redux";
import { updateSearch } from "../../store/slices/SearchSlice";
import { AxiosError } from "axios";

export const Header = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [user, setUser] = useState<TUser[]>([]);
  const { avatar } = useSelector(
    (state: RootState) => state.auth.user
  ) as TUser;
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function fethUser() {
      if (searchValue) {
        try {
          const { data } = await axios.get(`user/search?key=${searchValue}`);
          setUser(data.data);
          setIsLoading(false);
        } catch (err: unknown) {
          const error = err as AxiosError;
          console.error(error.message);
        }
      }
    }

    fethUser();
  }, [searchValue]);

  const handleLogout = async () => {
    await axios.get("user/logout");
    socket.disconnect();
    navigate("/entrance");
  };

  const KeyboardEventSearch = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    let key = event.which || event.keyCode;
    if (key === 13) {
      navigate("/search");
    }
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    dispatch(updateSearch(value));
    if (value.length === 0) {
      setIsLoading(true);
    }
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Flex display="flex" gap="30px" alignitems="center">
          <Img width="136px" height="24px" src={logo_vk}></Img>
          <Area position="relative">
            <StyledChangedInput
              onKeyPress={KeyboardEventSearch}
              onChange={debounce((e: React.ChangeEvent<HTMLInputElement>) => {
                handleSearch(e.target.value);
              }, 2000)}
              border="1px solid #545454"
              br="8px"
              padding="0px 35px"
              placeholder="Поиск"
              bc="#3f3f3f"
              color="#e9e9e9"
              width="230px"
              height="32px"
            ></StyledChangedInput>
            <Area position="absolute" mt="-25px" ml="10px">
              <Img width="16px" height="16px" src={loupe}></Img>
            </Area>
            <StyledBlockSearch>
              {isLoading ? (
                <StyledSearchWrapper>
                  <StyledLoader></StyledLoader>
                </StyledSearchWrapper>
              ) : (
                <StyledSearchWrapper>
                  <Text color="#dedede">Люди</Text>
                  {user?.map((el: TUser, index) => (
                    <Area key={index} mt="10px">
                      <Flex
                        display="flex"
                        alignitems="center"
                        justifycontent="space-between"
                      >
                        <NavbarLink to={"/" + el.id}>
                          <Flex display="flex" alignitems="center" gap="10px">
                            <Img
                              br="50%"
                              width="40px"
                              height="40px"
                              src={el.avatar ? el.avatar : defAvatar}
                            ></Img>
                            <Flex
                              display="flex"
                              flexdirection="column"
                              gap="10px"
                            >
                              <Text color="#dedede" cursor="pointer" fs="14px">
                                {el.lastName} {el.firstName}
                              </Text>
                            </Flex>
                          </Flex>
                        </NavbarLink>
                      </Flex>
                    </Area>
                  ))}
                </StyledSearchWrapper>
              )}
            </StyledBlockSearch>
          </Area>
        </Flex>
        <Flex display="flex" alignitems="center" gap="15px">
          <Img
            br="50%"
            width="32px"
            height="32px"
            src={avatar ? avatar : defAvatar}
          ></Img>
          <Img
            onClick={handleLogout}
            width="14px"
            height="11px"
            src={arrow}
          ></Img>
        </Flex>
      </StyledHeaderContainer>
    </StyledHeader>
  );
};
