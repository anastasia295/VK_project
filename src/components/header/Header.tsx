import { Input } from "../../ui/Input";
import { Flex } from "../../ui/Flex";
import { Img } from "../../components/img/Img";
import { Area } from "../../ui/Area";
import logo_vk from "../img/img/logo_vk.png";
import avatar from "../img/img/avatar.jpg";
import arrow from "../img/img/arrow.png";
import loupe from "../img/img/loupe.png";
import { NavbarLink } from "../../ui/NavbarLink";
import { StyledHeader, StyledHeaderContainer } from "./Header.styled";

export function Header() {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Flex display="flex" gap="30px" alignitems="center">
          <Img width="136px" height="24px" src={logo_vk}></Img>
          <Input
            withBorder={false}
            border="1px solid #545454"
            br="8px"
            padding="0px 35px"
            placeholder="Поиск"
            bc="#3f3f3f"
            color="#e9e9e9"
            width="230px"
            height="32px"
          ></Input>
          <Area ml="-250px">
            <Img width="16px" height="16px" src={loupe}></Img>
          </Area>
        </Flex>
        <Flex display="flex" alignitems="center" gap="15px">
          <Img br="50%" width="32px" height="32px" src={avatar}></Img>
          <NavbarLink fs="14px" color="black" to="#">
            <Img width="14px" height="11px" src={arrow}></Img>
          </NavbarLink>
        </Flex>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
