import { Input } from "../../ui/Input";
import { Flex } from "../../ui/Flex";
import { Img } from "../../components/img/Img";
import { Area } from "../../ui/Area";
import logo_vk from "../img/img/logo_vk.png";
import arrow from "../img/img/arrow.png";
import loupe from "../img/img/loupe.png";
import { StyledHeader, StyledHeaderContainer } from "./Header.styled";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios/axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TUser } from "../../types/user";
import defAvatar from "../../components/img/img/defAvatar.png";

export function Header() {
  const navigate = useNavigate();
  const handleLogout = async () => {
    await axios.get("user/logout");
    navigate("/entrance");
  };

  const { avatar } = useSelector(
    (state: RootState) => state.auth.user
  ) as TUser;

  const handleSearch = (event: any) => {
    let key = event.which || event.keyCode;
    if (key === 13) {
      navigate("/search");
    }
  };

  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <Flex display="flex" gap="30px" alignitems="center">
          <Img width="136px" height="24px" src={logo_vk}></Img>
          <Input
            onKeyPress={handleSearch}
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
          <Area position="absolute" ml="178px">
            <Img width="16px" height="16px" src={loupe}></Img>
          </Area>
        </Flex>
        <Flex display="flex" alignitems="center" gap="15px">
          <Img
            br="50%"
            width="32px"
            height="32px"
            src={avatar ? avatar : defAvatar}
          ></Img>

          <Img
            onClick={handleLogout}
            width="14px"
            height="11px"
            src={arrow}
          ></Img>
        </Flex>
      </StyledHeaderContainer>
    </StyledHeader>
  );
}
