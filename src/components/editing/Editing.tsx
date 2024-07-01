import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import {
  StyledCardNav,
  StyledCardFavorites,
} from "../messages/Messages.styled";
import { Area } from "../../ui/Area";
import { Text } from "../../ui/Text";
import { Flex } from "../../ui/Flex";
import { Input } from "../../ui/Input";
import { Select } from "../../ui/Select";
import { Option } from "../../ui/Option";
import {
  StyledEditing,
  StyledEditingСontainer,
  StyledInformation,
  StyledNavPersonal,
  StyledСhangeData,
} from "./Editing.styled";
import { Img } from "../img/Img";
import avatar from "../img/img/avatar.jpg";
import { Textarea } from "../../ui/Textarea";
import { Button } from "../../ui/Button";
import axios from "../../utils/axios/axios";
import { useState, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../store/slices/AuthSlice";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";

export function Editing() {
  const dispatch = useDispatch();
  const [user, setUser] = useState<TUser>(
    useSelector((state: RootState) => state.auth.user) as TUser
  );
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.put("user", user);
      dispatch(updateUser(data.data));
    } catch (e: any) {
      return e.message;
    }
  };

  const onChange = (fieldName: string) => (e: any) => {
    setUser((prev) => {
      return { ...prev, [fieldName]: e.target.value };
    });
  };
  const [file, setFile] = useState<any | undefined>();

  function handleChange(event: any) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit2(event: any) {
    if (file !== undefined) {
      event.preventDefault();
      const formData = new FormData();
      formData.append("avatar", file);
      formData.append("avatar", file.name);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      const { data } = await axios.put("user", formData, config);
      dispatch(updateUser(data.data.avatar));
    }
  }
  console.log(123, file);
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledEditing onSubmit={handleSubmit}>
          <StyledEditingСontainer>
            <Area mt="20px" ml="20px">
              <Text fs="15px">Профиль</Text>
            </Area>
            <Area mt="20px" position="relative">
              <Img src={user.avatar} width="100%" height="150px"></Img>
              <Area position="absolute" top="25px" right="25px">
                <Input onChange={handleChange} type="file"></Input>
                <Button
                  onClick={handleSubmit2}
                  type="submit"
                  fs="15px"
                  br="8px"
                  color="#bcbcbc"
                  bc="#222222"
                  width="189px"
                  height="32px"
                >
                  Изменить обложку
                </Button>
              </Area>
            </Area>

            <StyledСhangeData>
              <Area position="relative" top="-35px">
                <Img
                  src={avatar}
                  br="50%"
                  width="92px"
                  height="92px"
                  border="4px solid rgba(0,0,0,0.3)"
                ></Img>
              </Area>
              <Text fs="15px">
                {user.firstName} {user.lastName}
              </Text>
              <NavbarLink to="/personalData">
                <Text fs="13px">Изменить данные</Text>
              </NavbarLink>
            </StyledСhangeData>
          </StyledEditingСontainer>
          <StyledInformation>
            <Flex display="flex">
              <Text color="#a0a0a0" width="150px">
                Краткая информация:
              </Text>
              <Textarea
                type="text"
                border="1px solid #545454"
                br="10px"
                padding="5px"
                width="300px"
                height="100px"
                value={user.status}
                bc="#222222"
                color="#e9e9e9"
                maxLength={100}
                onChange={onChange("status")}
              ></Textarea>
            </Flex>
            <Flex display="flex" alignitems="center">
              <Text color="#a0a0a0" width="150px">
                Семейное положение:
              </Text>
              <Select
                value={user.familyStatus}
                border="1px solid #545454"
                bc="#222222"
                color="#bcbcbc"
                width="300px"
                height="30px"
                br="5px"
                onChange={onChange("familyStatus")}
              >
                <Option value="notChosen">Не выбрано</Option>
                <Option value="single">Не замужем/Не женат</Option>
                <Option value="married">Замужем/Женат</Option>
                <Option value="inLove">Влюблена/Влюблен</Option>
                <Option value="activeSearch">В активном поиске</Option>
              </Select>
            </Flex>
            <Flex display="flex" alignitems="center">
              <Text color="#a0a0a0" width="150px">
                Родной город:
              </Text>
              <Input
                value={user.city}
                padding="5px"
                bc="#222222"
                color="#bcbcbc"
                width="300px"
                height="30px"
                br="5px"
                withBorder={false}
                border="1px solid #545454"
                onChange={onChange("city")}
              ></Input>
            </Flex>
            <Area position="absolute" bottom="50px" left="40%">
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
          </StyledInformation>
        </StyledEditing>
        <StyledCardNav>
          <NavbarLink to="/personalData">
            <StyledNavPersonal>
              <Text fs="14px">Личные данные</Text>
              <Text color="#a0a0a0" fs="11px">
                Имя, фамилия, дата рождения, пол
              </Text>
            </StyledNavPersonal>
          </NavbarLink>
          <StyledCardFavorites>
            <Text fs="13px">Профиль</Text>
          </StyledCardFavorites>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
}
