import { Button } from "../../ui/Button";
import { Area } from "../../ui/Area";
import { Text } from "../../ui/Text";
import { Img } from "../img/Img";
import { Textarea } from "../../ui/Textarea";
import { useRef, useState } from "react";
import lens from "../img/img/lens.png";
import { Flex } from "../../ui/Flex";
import { RootState } from "../../store/store/Store";
import { Input } from "../../ui/Input";
import {
  StyledPagePosts2,
  StyledPagePosts,
  StyledPageRecords,
  StyledPageWall,
} from "./Wall.styled";
import { useDispatch, useSelector } from "react-redux";
import { postCreate } from "../../store/slices/PostSlice";
import Post from "./Post";
import defAvatar from "../../components/img/img/defAvatar.png";
import { TUser } from "../../types/user";

function Posts(props: any) {
  const { avatar } = useSelector(
    (state: RootState) => state.auth.user
  ) as TUser;
  const posts = useSelector((state: RootState) => state.post.value);
  const dispatch = useDispatch();

  const ref = useRef<any>(null);

  const [isTextareaVisible, setIsTextareaVisible] = useState(true);
  const [textPost, setTextPost] = useState("");

  const onClick = () => {
    setIsTextareaVisible((prev) => !prev);
  };

  const handleTextarea = (e: any) => {
    e.preventDefault();
    setTextPost(e.target.value);
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = `${e.target.scrollHeight - 0}px`;
    }
  };

  const handleonclick = (e: any) => {
    if (textPost.length !== 0) {
      const newTodo = {
        id: Math.floor(Math.random() * 888888) + 100000,
        name: textPost,
      };
      dispatch(postCreate(newTodo));
      setTextPost("");
    }
  };

  return (
    <StyledPagePosts>
      {isTextareaVisible ? (
        <div>
          <Input
            onClick={onClick}
            border="1px solid #373737"
            br="10px"
            padding="5px 55px"
            width="550px"
            height="56px"
            placeholder="Что у вас нового?"
            bc="#222222"
            color="#e9e9e9"
          ></Input>
          <Area position="absolute" mt="-43px" ml="20px">
            <Img
              br="50%"
              width="28px"
              height="28px"
              src={avatar ? avatar : defAvatar}
            ></Img>
          </Area>
        </div>
      ) : (
        <StyledPagePosts2>
          <Textarea
            ref={ref}
            rows={1}
            value={textPost}
            onChange={handleTextarea}
            type="text"
            border="1px solid #373737"
            br="10px"
            padding="17px 55px 65px 55px"
            width="550px"
            placeholder="Что у вас нового?"
            bc="#222222"
            color="#e9e9e9"
          ></Textarea>
          <Area position="absolute" top="15px" left="20px">
            <Img br="50%" width="28px" height="28px" src={avatar}></Img>
          </Area>

          <Area position="absolute" bottom="15px" left="390px">
            <Button
              onClick={handleonclick}
              form="pseudoBtn"
              color="black"
              br="8px"
              width="130px"
              height="32px"
            >
              Опубликовать
            </Button>
          </Area>
        </StyledPagePosts2>
      )}

      <StyledPageWall>
        <Flex display="flex" alignitems="center" justifycontent="space-between">
          <Text fs="15px">Мои записи</Text>
          <Img width="16px" height="16px" src={lens}></Img>
        </Flex>
      </StyledPageWall>
      <StyledPageRecords>
        {!!posts.length &&
          posts.map((post: any) => {
            return <Post key={post.id} id={post.id} name={post.name}></Post>;
          })}
      </StyledPageRecords>
    </StyledPagePosts>
  );
}

export default Posts;
