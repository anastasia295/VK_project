import { Area } from "../../ui/Area";
import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import { Img } from "../img/Img";
import avatar from "../../components/img/img/avatar.jpg";
import { BorderBottom, StyledMessagesWrapper } from "./MessageRepeat.styled";

export function MessagesRepeat(props: { name: string; message: string }) {
  return (
    <StyledMessagesWrapper>
      <Flex display="flex" alignitems="center" gap="10px">
        <Img src={avatar} br="50%" width="50px" height="50px"></Img>
        <Flex display="flex" flexdirection="column" gap="">
          <Flex display="flex" flexdirection="column" gap="7px">
            <Text color="#dedede" fs="14px">
              {props.name}
            </Text>
            <Text color="#dedede" fs="12px">
              {props.message}
            </Text>
          </Flex>
          <Area position="absolute" mt="52px">
            <BorderBottom></BorderBottom>
          </Area>
        </Flex>
      </Flex>
    </StyledMessagesWrapper>
  );
}
