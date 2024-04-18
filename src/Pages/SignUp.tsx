import styled from "styled-components";
import { Text } from "../components/Text";
import { Input } from "../UI/Input";
import { Button } from "../UI/Button";
import { Flex } from "../UI/Flex";
import { Img } from "../components/Img";

export function SignUp() {
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
            <Text margintop="15px" fontsize="30px">
              Введите телефон
            </Text>
            <Text margintop="10px" fontsize="15px">
              Ваш номер телефона будет использоваться для входа в аккаунт
            </Text>
            <Input margintop="20px" placeholder="Введите телефон"></Input>
            <Input margintop="20px" placeholder="Введите пароль"></Input>
            <Input margintop="20px" placeholder="Повторите пароль"></Input>
            <Button margintop="50px" backgroundcolor="#f1d0d5">
              Продолжить
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
