import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import send from "../../components/img/img/send.png";
import { Img } from "../img/Img";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import backArrow from "../img/img/backArrow.png";
import cat from "../img/img/cat.png";

import {
  StyledDialogueUp,
  StyledDialogСontainer,
  StyledDialogueBottom,
  StyledDialogueMessages,
  StyledCardNav,
} from "../dialogue/Dialogue.styled";

import { Textarea } from "../../ui/Textarea";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";

export const Dialogue = () => {
  const { firstName, lastName, avatar } = useSelector(
    (state: RootState) => state.auth.user
  ) as TUser;
  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledDialogСontainer>
          <StyledDialogueUp>
            <NavbarLink to="/messages">
              <Flex display="flex" alignitems="center" gap="5px">
                <Img src={backArrow} width="24px" height="24px"></Img>
                <Text color="#a0a0a0" fs="14px">
                  Назад
                </Text>
              </Flex>
            </NavbarLink>
            <NavbarLink fs="14px" color="white" to="/:id">
              Кошка Котова
            </NavbarLink>
            <Img src={cat} width="30px" height="30px" br="50%"></Img>
          </StyledDialogueUp>
          <StyledDialogueMessages>
            <Flex display="flex" gap="8px">
              <Img src={avatar} width="30px" height="30px" br="50%"></Img>
              <Flex display="flex" flexdirection="column">
                <Text color="#64a1ff" fs="12px">
                  {firstName} {lastName}
                </Text>
                <Text color="white" fs="12px">
                  Сообщениe
                </Text>
              </Flex>
            </Flex>

            <Flex display="flex" gap="8px">
              <Img src={cat} width="30px" height="30px" br="50%"></Img>
              <Flex display="flex" flexdirection="column">
                <Text color="#64a1ff" fs="12px">
                  Кошка Котова
                </Text>
                <Text color="white" fs="12px">
                  Сообщениe
                </Text>
              </Flex>
            </Flex>
          </StyledDialogueMessages>
          <StyledDialogueBottom>
            <Textarea
              wrap="hard"
              border="1px solid #373737"
              br="5px"
              padding="10px 10px"
              width="450px"
              height="36px"
              placeholder="Напишите сообщение..."
              bc="#222222"
              color="#e9e9e9"
              maxlength="140"
            ></Textarea>
            <Img src={send} width="40px" height="40px"></Img>
          </StyledDialogueBottom>
        </StyledDialogСontainer>
        <StyledCardNav>
          <Text fs="13px" color="#dedede">
            Все чаты
          </Text>

          <Text fs="13px" color="#dedede">
            Кошка Котова
          </Text>
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
