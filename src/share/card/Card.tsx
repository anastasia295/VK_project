import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { StyledCardWrapper, StyledTextWrapper } from "./Card.styled";
import { Img } from "../../components/img/Img";
import { TCardProps } from "./Card.types";
export function Card({
  lastName,
  firstName,
  avatar,
  children,
  hideBorder,
}: TCardProps) {
  return (
    <StyledCardWrapper>
      <Flex display="flex" alignitems="center" gap="10px" width="100%">
        <Img src={avatar} br="50%" width="80px" height="80px"></Img>
        <StyledTextWrapper hideBorder={!!hideBorder}>
          <Flex display="flex" gap="5px">
            <Text color="#dedede" fs="14px">
              {lastName}
            </Text>
            <Text color="#dedede" fs="14px">
              {firstName}
            </Text>
          </Flex>
          {children}
        </StyledTextWrapper>
      </Flex>
    </StyledCardWrapper>
  );
}
