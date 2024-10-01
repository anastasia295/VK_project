import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import { StyledCardNav, StyledPersonalСontainer } from "./PersonalData.styled";
import { Img } from "../img/Img";
import { Input } from "../../ui/Input";
import { Select } from "../../ui/Select";
import { Option } from "../../ui/Option";
import { Button } from "../../ui/Button";
import { Area } from "../../ui/Area";
import { TUser } from "../../types/user";
import { RootState } from "../../store/store/Store";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../utils/axios/axios";
import { FormEvent, useState } from "react";
import { updateUser } from "../../store/slices/AuthSlice";
import { AxiosError } from "axios";

export const PersonalData = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<TUser>(
    useSelector((state: RootState) => state.auth.user) as TUser
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("user", user);
      dispatch(updateUser(data.data));
    } catch (err: unknown) {
      const error = err as AxiosError;
      console.error(error.message);
    }
  };

  const onChange =
    (fieldName: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setUser((prev) => {
        return { ...prev, [fieldName]: e.target.value };
      });
    };

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledPersonalСontainer onSubmit={handleSubmit}>
          <Flex display="flex" alignitems="center" gap="15px">
            <Img src={user.avatar} br="50%" width="72px" height="72px"></Img>
            <Text color="#dedede" fs="18px">
              {user.firstName} {user.lastName}
            </Text>
          </Flex>
          <Area mt="20px">
            <Flex
              display="flex"
              flexwrap="wrap"
              justifycontent="space-between"
              gap="30px"
            >
              <Flex display="flex" flexdirection="column" gap="5px">
                <Text color="#a0a0a0" fs="12px">
                  Имя
                </Text>
                <Input
                  withborder
                  border="1px solid #545454"
                  br="8px"
                  fs="16px"
                  padding="0px 10px"
                  value={user.firstName}
                  placeholderTextColor="#bcbcbc"
                  bc="#222222"
                  color="#bcbcbc"
                  width="244px"
                  height="36px"
                  onChange={onChange("firstName")}
                ></Input>
              </Flex>
              <Flex display="flex" flexdirection="column" gap="5px">
                <Text color="#a0a0a0" fs="12px">
                  Фамилия
                </Text>
                <Input
                  withborder
                  border="1px solid #545454"
                  br="8px"
                  fs="16px"
                  padding="0px 10px"
                  value={user.lastName}
                  placeholderTextColor="#bcbcbc"
                  bc="#222222"
                  color="#bcbcbc"
                  width="244px"
                  height="36px"
                  onChange={onChange("lastName")}
                ></Input>
              </Flex>
              <Flex display="flex" flexdirection="column" gap="5px">
                <Text color="#a0a0a0" fs="12px">
                  Пол
                </Text>
                <Select
                  value={user.gender}
                  withborder
                  border="1px solid #545454"
                  bc="#222222"
                  color="#bcbcbc"
                  width="244px"
                  height="36px"
                  br="8px"
                  onChange={onChange("gender")}
                >
                  <Option value="man" fs="16px">
                    Мужской
                  </Option>
                  <Option value="women" fs="16px">
                    Женский
                  </Option>
                </Select>
              </Flex>
              <Flex display="flex" flexdirection="column" gap="5px">
                <Text color="#a0a0a0" fs="12px">
                  Дата рождения
                </Text>
                <Input
                  value={user.birthday}
                  withborder
                  border="1px solid #545454"
                  br="8px"
                  fs="16px"
                  padding="0px 10px"
                  placeholderTextColor="#bcbcbc"
                  bc="#222222"
                  color="#bcbcbc"
                  width="244px"
                  height="36px"
                  type="date"
                  id="start"
                  name="trip-start"
                  min="1965-01-01"
                  max="2024-12-31"
                  onChange={onChange("birthday")}
                />
              </Flex>
            </Flex>
          </Area>
          <Area position="absolute" bottom="30px" left="15px">
            <Button
              bc="#a0a0a0"
              color="black"
              br="8px"
              width="104px"
              height="32px"
            >
              Сохранить
            </Button>
          </Area>
        </StyledPersonalСontainer>
        <StyledCardNav>
          <NavbarLink
            display="flex"
            background=" #3a3a3a"
            flexdirection="column"
            width="100%"
            height="40px"
            br="5px"
            padding="8px"
            to="#"
          >
            <Text color="#dedede" fs="14px">
              Личные данные
            </Text>
            <Text color="#a0a0a0" fs="11px">
              Имя, фамилия, дата рождения, пол
            </Text>
          </NavbarLink>
          <NavbarLink
            display="flex"
            alignitems="center"
            width="100%"
            height="40px"
            br="5px"
            padding="8px"
            hidebackground
            to="/editing"
          >
            <Text color="#dedede" fs="13px">
              Профиль
            </Text>
          </NavbarLink>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
