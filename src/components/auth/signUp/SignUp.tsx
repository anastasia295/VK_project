import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Text } from "../../../ui/Text";
import { Input } from "../../../ui/Input";
import { Button } from "../../../ui/Button";
import { Flex } from "../../../ui/Flex";
import { Img } from "../../img/Img";
import icon_vk_black from "../../img/img/icon_vk_black.png";
import { updateUser } from "../../../store/slices/AuthSlice";
import { Area } from "../../../ui/Area";
import {
  StyledAppWrapper,
  StyledContainer,
  StyledPageblockVK,
} from "./SignUp.styled";
import axios from "../../../utils/axios/axios";

export const SignUp: React.FC = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (password === repeatPassword) {
      try {
        const userData = {
          firstName,
          lastName,
          email,
          password,
        };
        const { data } = await axios.post("user/signUp", userData);
        dispatch(updateUser(data.data));
        navigate("/entrance");
      } catch (e: any) {
        return e.message;
      }
    } else {
      throw new Error("У вас не совпадают пароли");
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
                Введите данные
              </Text>
            </Area>
            <Area mt="-10px">
              <Text width="250px" color="#d3d3d3" fs="15px" textalign="center">
                Ваша почта будет использоваться для входа в аккаунт
              </Text>
            </Area>

            <Input
              type="text"
              withBorder
              padding="15px"
              br="8px"
              width="304px"
              height="36px"
              placeholder="Введите имя"
              bc="#3f3f3f"
              border="1px solid #545454"
              color="#e9e9e9"
              required
              onChange={(e: any) => setLastName(e.target.value)}
            ></Input>
            <Input
              withBorder
              padding="15px"
              br="8px"
              width="304px"
              height="36px"
              placeholder="Введите фамилию"
              bc="#3f3f3f"
              border="1px solid #545454"
              color="#e9e9e9"
              required
              onChange={(e: any) => setFirstName(e.target.value)}
            ></Input>
            <Input
              type="email"
              withBorder
              padding="15px"
              br="8px"
              width="304px"
              height="36px"
              placeholder="Введите почту"
              bc="#3f3f3f"
              border="1px solid #545454"
              color="#e9e9e9"
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
              color="#e9e9e9"
              required
              onChange={(e: any) => setPassword(e.target.value)}
            ></Input>
            <Input
              type="password"
              withBorder
              bc="#3f3f3f"
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              placeholder="Повторите пароль "
              required
              border="1px solid #545454"
              color="#e9e9e9"
              onChange={(e: any) => setRepeatPassword(e.target.value)}
            ></Input>
            <Area mt="10px">
              <Button
                type="submit"
                color="#191919"
                br="8px"
                width="304px"
                height="36px"
                lh="24px"
              >
                Продолжить
              </Button>
            </Area>
          </Flex>
        </StyledPageblockVK>
      </StyledContainer>
    </StyledAppWrapper>
  );
};
