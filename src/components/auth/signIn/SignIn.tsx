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

export const SignIn: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const userData = {
        email,
        password,
      };

      const { data } = await axios.post("user/signIn", userData);
      dispatch(updateUser(data.data));
      navigate("/mypage");
    } catch (e: any) {
      return e.message;
    }
  };

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
              withBorder
              border="1px solid #545454"
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              bc="#3f3f3f"
              color="#e9e9e9"
              placeholder="Введите логин"
              type="text"
              required
              onChange={(e: any) => setEmail(e.target.value)}
            ></Input>
            <Input
              type="password"
              withBorder
              border="1px solid #545454"
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              placeholder="Введите пароль"
              bc="#3f3f3f"
              required
              color="#e9e9e9"
              onChange={(e: any) => setPassword(e.target.value)}
            ></Input>

            <Button
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
