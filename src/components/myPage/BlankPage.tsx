import { Flex } from "../../ui/Flex";
import { MainPage } from "../mainPage/MainPage";
import { Text } from "../../ui/Text";
import { StyledBlockInformation, StyledInformation } from "./BlankPage.styled";
import { NavbarLink } from "../../ui/NavbarLink";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";

export const BlankPage = () => {
  const user = useSelector((state: RootState) => state.auth.user) as TUser;
  return (
    <MainPage>
      <Flex display="flex" flexdirection="column" gap="15px">
        <StyledBlockInformation>
          <Text fs="20px"> Информация </Text>
          <StyledInformation>
            <Flex
              display="flex"
              flexdirection="column"
              alignitems="center"
              gap="20px"
            >
              <Text fs="15px">Страница удалена либо ещё не создана</Text>
              <NavbarLink
                display="flex"
                alignitems="center"
                justifycontent="center"
                background="white"
                to={"/" + user.id}
                fs="15px"
                br="8px"
                width="104px"
                height="32px"
              >
                <Text color="black" fs="15px">
                  Назад
                </Text>
              </NavbarLink>
            </Flex>
          </StyledInformation>
        </StyledBlockInformation>
        <Flex display="flex" justifycontent="space-between"></Flex>
      </Flex>
    </MainPage>
  );
};
