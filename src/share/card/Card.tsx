import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import avatar from "../../components/img/img/avatar.jpg";
import { StyledCardWrapper, StyledTextWrapper } from "./Card.styled";
import { Img } from "../../components/img/Img";
import { TCardProps } from "./Card.types";

export function Card({ name, children, hideBorder }: TCardProps) {
  return (
    <StyledCardWrapper>
      <Flex display="flex" alignitems="center" gap="10px" width="100%">
        <Img src={avatar} br="50%" width="80px" height="80px"></Img>
        <StyledTextWrapper hideBorder={!!hideBorder}>
          <Text color="#dedede" fs="14px">
            {name}
          </Text>
          {children}
        </StyledTextWrapper>
      </Flex>
    </StyledCardWrapper>
  );
}
