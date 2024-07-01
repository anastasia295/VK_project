import { Button } from "./ui/Button";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/slices/CounterSlice";

import { Flex } from "./ui/Flex";
import { Text } from "./ui/Text";
import { RootState } from "./store/store/Store";

function Likes(props: any) {
  const count = useSelector((state: RootState) => state.like.value);
  const dispatch = useDispatch();
  return (
    <Flex display="flex">
      <Button bc="green" width="250px" onClick={() => dispatch(increment())}>
        лайк
      </Button>
      <Text fs="30px" color="blue">
        {count}
      </Text>
      <Button bc="red" width="250px" onClick={() => dispatch(decrement())}>
        дизлайк
      </Button>
    </Flex>
  );
}

export default Likes;
