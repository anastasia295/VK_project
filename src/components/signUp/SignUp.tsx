import { Text } from "../../ui/Text";
import { Input } from "../../ui/Input";
import { Button } from "../../ui/Button";
import { Flex } from "../../ui/Flex";
import { Img } from "../img/Img";
import iconvk from "../img/img/iconvk.png";

import {
  StyledAppWrapper,
  StyledContainer,
  StyledPageblockVK,
} from "./SignUp.styled";
import { Area } from "../../ui/Area";

export function SignUp() {
  return (
    <StyledAppWrapper>
      <StyledContainer>
        <StyledPageblockVK>
          <Flex
            flexdirection="column"
            justifycontent="center"
            alignitems="center"
            gap="20px"
          >
            <Area mt="20px">
              <Img width="60px" height="60px" src={iconvk}></Img>{" "}
            </Area>

            <Area mt="-10px">
              <Text color="#d3d3d3" fs="30px">
                Введите телефон
              </Text>
            </Area>
            <Area mt="-10px">
              <Text width="250px" color="#d3d3d3" fs="15px" textalign="center">
                Ваш номер телефона будет использоваться для входа в аккаунт
              </Text>
            </Area>
            <Input
              padding="15px"
              br="8px"
              width="304px"
              height="36px"
              placeholder="Введите телефон"
              bc="#3f3f3f"
              border="1px solid #545454"
              color="#e9e9e9"
              defaultValue="+7"
            ></Input>
            <Input
              border="1px solid #545454"
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              placeholder="Введите пароль"
              bc="#3f3f3f"
              color="#e9e9e9"
            ></Input>
            <Input
              bc="#3f3f3f"
              br="8px"
              padding="15px"
              width="304px"
              height="36px"
              placeholder="Повторите пароль "
              border="1px solid #545454"
              color="#e9e9e9"
            ></Input>
            <Area mt="40px">
              <Button
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
}
