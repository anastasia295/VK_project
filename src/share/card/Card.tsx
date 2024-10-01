import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { StyledCardWrapper, StyledTextWrapper } from "./Card.styled";
import { Img } from "../../components/img/Img";
import { TCardProps } from "./Card.types";
import { NavbarLink } from "../../ui/NavbarLink";
export function Card({
  lastName,
  firstName,
  avatar,
  children,
  id,
  hideborder,
}: TCardProps) {
  return (
    <StyledCardWrapper>
      <Flex display="flex" alignitems="center" gap="10px" width="100%">
        <Img src={avatar} br="50%" width="80px" height="80px"></Img>
        <StyledTextWrapper hideborder={!!hideborder}>
          <NavbarLink key={id} to={"/" + id}>
            <Flex display="flex" gap="5px">
              <Text color="#dedede" fs="14px">
                {lastName}
              </Text>
              <Text color="#dedede" fs="14px">
                {firstName}
              </Text>
            </Flex>
          </NavbarLink>

          {children}
        </StyledTextWrapper>
      </Flex>
    </StyledCardWrapper>
  );
}
