import styled from "styled-components";
import { Text } from "../components/Text";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { Flex } from "../UI/Flex";
import { Link } from "react-router-dom";

import { Img } from "../components/Img";

export function SignIn() {
  return (
    <StyledAppWrapper>
      <StyledContainer>
        <StyledPageblockVK>
          <Flex
            flexdirection="column"
            justifycontent="center"
            alignitems="center"
          >
            <Img></Img>
            <Text margintop="20px" fontsize="30px">
              Вход Вконтакте
            </Text>
            <Input margintop="20px" placeholder="Введите логин"></Input>
            <Input margintop="20px" placeholder="Введите пароль"></Input>
            <Button margintop="20px" backgroundcolor="#bdbebd">
              Войти
            </Button>
            <Button margintop="75px" backgroundcolor="#f1d0d5">
              <Link to="registration">Регистрация</Link>
            </Button>
          </Flex>
        </StyledPageblockVK>
      </StyledContainer>
    </StyledAppWrapper>
  );
}

const StyledPageblockVK = styled.div`
  background-color: #2c2c2c;
  width: 400px;
  height: 506px;
  margin-bottom: 10px;
`;

const StyledContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledAppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 2rem;
  background: #191919;
`;
