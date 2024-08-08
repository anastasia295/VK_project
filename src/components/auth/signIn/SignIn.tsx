import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "../../../utils/axios/axios";
import { Text } from "../../../ui/Text";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { Flex } from "../../../ui/Flex";
import { NavbarLink } from "../../../ui/NavbarLink";
import { Img } from "../../img/Img";
import icon_vk_black from "../../img/img/icon_vk_black.png";
import { Area } from "../../../ui/Area";
import { updateUser } from "../../../store/slices/AuthSlice";
import {
  StyledAppWrapper,
  StyledContainer,
  StyledPageblockVK,
} from "./SIgnIn.styled";
import { AxiosError } from "axios";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasError, setHasError] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };
      const { data } = await axios.post("user/signIn", userData);
      dispatch(updateUser(data.data));
      navigate(`/${data.data.id}`);
    } catch (error) {
      throw new Error((error as AxiosError).message);
    }
  };

  function handleEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEmail(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }

  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }
  return (
    <StyledAppWrapper onSubmit={handleSubmit}>
      <StyledContainer>
        <StyledPageblockVK>
          <Flex
            display="flex"
            flexdirection="column"
            justifycontent="center"
            alignitems="center"
            gap="20px"
          >
            <Area mt="20px">
              <Img width="60px" height="50px" src={icon_vk_black}></Img>
            </Area>
            <Area mt="-20px">
              <Text color="#d3d3d3" fs="25px">
                Вход Вконтакте
              </Text>
            </Area>
            <Input
              border={hasError ? "1px solid red" : "1px solid #545454"}
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              bc="#3f3f3f"
              color="#e9e9e9"
              placeholder="Введите логин"
              type="text"
              required
              onChange={handleEmailChange}
            ></Input>
            <Input
              type="password"
              border={hasError ? "1px solid red" : "1px solid #545454"}
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              placeholder="Введите пароль"
              bc="#3f3f3f"
              required
              color="#e9e9e9"
              onChange={handlePasswordChange}
            ></Input>
            <Button
              disabled={hasError}
              type="submit"
              fs="14px"
              br="8px"
              width="304px"
              height="36px"
              lh="24px"
            >
              Войти
            </Button>
            <Area mt="110px">
              <Button
                fs="14px"
                bc="#ffe4e1"
                br="8px"
                width="304px"
                height="36px"
                lh="24px"
                color="black"
              >
                <NavbarLink fs="14px" color="black" to="/registration">
                  Регистрация
                </NavbarLink>
              </Button>
            </Area>
          </Flex>
        </StyledPageblockVK>
      </StyledContainer>
    </StyledAppWrapper>
  );
};
