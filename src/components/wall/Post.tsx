import { Area } from "../../ui/Area";
import { Text } from "../../ui/Text";
import { Img } from "../img/Img";
import { Flex } from "../../ui/Flex";
import { useDispatch } from "react-redux";
import { postDelete } from "../../store/slices/PostSlice";
import deletion from "../img/img/deletion.png";
import { TPost } from "../../types/user";

export const Post = ({ id, name }: TPost) => {
  const dispatch = useDispatch();

  const handleDelete = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(postDelete({ id }));
  };

  return (
    <Area mt="10px">
      <Flex display="flex" alignitems="center" gap="10px">
        <Text wb="break-all" fs="13px" width="510px" color="#dedede">
          {name}
        </Text>

        <Img
          onClick={handleDelete}
          src={deletion}
          width="25px"
          height="25px"
        ></Img>
      </Flex>
    </Area>
  );
};

export default Post;
