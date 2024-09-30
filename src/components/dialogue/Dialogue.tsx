import { Flex } from "../../ui/Flex";
import { Text } from "../../ui/Text";
import send from "../../components/img/img/send.png";
import { Img } from "../img/Img";
import { NavbarLink } from "../../ui/NavbarLink";
import { MainPage } from "../mainPage/MainPage";
import backArrow from "../img/img/backArrow.png";
import removal from "../img/img/removal.svg";
import change from "../img/img/change.svg";
import checkMark from "../img/img/checkMark.svg";

import {
  StyledDialogueUp,
  StyledDialogСontainer,
  StyledDialogueBottom,
  StyledDialogueMessages,
  StyledCardNav,
} from "../dialogue/Dialogue.styled";
import defAvatar from "../../components/img/img/defAvatar.png";
import { Textarea } from "../../ui/Textarea";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store/Store";
import axios from "../../utils/axios/axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { updatePage } from "../../store/slices/PageSlice";
import { TUser } from "../../types/user";
import { TDialogue } from "../../types/message";
import { AxiosError } from "axios";
import { socket } from "../../api/socket";
import {
  addDialogue,
  deleteDialogue,
  deleteNotification,
  updateDialogue,
  updateMessages,
} from "../../store/slices/MessagesSlice";
import { cloneDeep, debounce } from "lodash";
import { Area } from "../../ui/Area";

export const Dialogue = () => {
  const { id } = useParams();
  const [value, setValue] = useState("");
  const [idMessage, setIdMessage] = useState("");
  const [index, setIndex] = useState(0);
  const [isvisibleEditing, setIsVisibleEditing] = useState(false);
  const userPage = useSelector((state: RootState) => state.page.page) as TUser;
  const user = useSelector((state: RootState) => state.auth.user) as TUser;
  const typing = useSelector((state: RootState) => state.messages.typing);
  const dialogue = useSelector(
    (state: RootState) => state.messages.dialogue
  ) as TDialogue[];
  const arrMessages = useSelector(
    (state: RootState) => state.messages.messages
  );

  const dispatch = useDispatch();

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function fethUser() {
      if (id) {
        try {
          const { data } = await axios.get(`user/${id}`);
          dispatch(updatePage(data.data));
        } catch (err: unknown) {
          console.error((err as AxiosError).message);
        }
      }
    }
    fethUser();
  }, [id, dispatch]);

  useEffect(() => {
    async function fetchChat() {
      if (id) {
        try {
          const { data } = await axios.get(`chat/${id}`);
          dispatch(updateDialogue(data.data));
          dispatch(deleteNotification(Number(id)));
        } catch (err: unknown) {
          const error = err as AxiosError;
          console.error(error.message);
        }
      }
    }
    fetchChat();
  }, [id, dispatch]);

  const handleSend = async () => {
    if (value.length !== 0) {
      try {
        const message = {
          whom: id,
          message: value,
        };
        const { data } = await axios.post("message/", message);
        console.log(data, "data444444");
        const mes = {
          message: value,
          id: user.id,
          mesId: data.data.id,
        };
        const to = userPage.id;
        socket.emit("message:add", { mes, to });
        socket.emit("message:nottyping", userPage.id);
        socket.emit("message:notification", { mes, to });
        setValue("");
        dispatch(addDialogue(data.data));
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
  };

  const handleDelete = async (id: string, i: number) => {
    if (id) {
      try {
        await axios.delete(`message/${id}`);
        const to = userPage.id;
        const mes = {
          message: value,
          index: i,
          id: user.id,
        };
        socket.emit("message:delete", { mes, to });
        dispatch(deleteDialogue({ index: i }));
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    if (userPage) {
      const cloneArrMessages = cloneDeep(arrMessages);
      let index: number | undefined;
      cloneArrMessages.forEach((el) => {
        if (el.user.id === userPage.id) {
          index = cloneArrMessages.indexOf(el);
        }
      });
      let item: TDialogue | undefined;
      if (dialogue) {
        item = dialogue[dialogue.length - 1];
      }
      if (index !== undefined && item !== undefined) {
        if (cloneArrMessages[index].user.id === userPage.id) {
          cloneArrMessages[index].lastMessage.message = item.message;
          cloneArrMessages[index].lastMessage.user = user;
          console.log(cloneArrMessages, "cloneArrMessages");
          dispatch(updateMessages(cloneArrMessages));
        }
      }
    }
  }, [dispatch, dialogue, userPage]); // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSave() {
    if (dialogue) {
      try {
        const { data } = await axios.put(`message/${idMessage}`, {
          message: value,
        });
        const cloneDialogue = cloneDeep(dialogue);
        cloneDialogue[index].message = data.data.message;

        dispatch(updateDialogue(cloneDialogue));
        setValue("");
        setIsVisibleEditing(false);
        const mes = {
          message: value,
          id: user.id,
          index: index,
        };
        const to = userPage.id;
        socket.emit("message:editing", { mes, to });
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
  }

  const handleEdit = (id: string, mes: string, index: number) => {
    setValue(mes);
    setIsVisibleEditing(true);
    setIdMessage(id);
    setIndex(index);
  };

  const closeEditing = () => {
    setIsVisibleEditing(false);
    setValue("");
  };

  function handleMessageChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
    socket.emit("message:typing", userPage.id);
    if (event.target.value.length === 0) {
      socket.emit("message:nottyping", userPage.id);
    }
  }

  function handleMessage(event: any) {
    socket.emit("message:nottyping", userPage.id);
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
    }
  }, [dialogue]);

  if (!dialogue) return null;

  console.log(dialogue, "dialog");

  return (
    <MainPage>
      <Flex display="flex" gap="15px">
        <StyledDialogСontainer>
          {userPage && (
            <StyledDialogueUp>
              <NavbarLink to="/messages">
                <Flex display="flex" alignitems="center" gap="5px">
                  <Img src={backArrow} width="24px" height="24px"></Img>
                  <Text cursor="pointer" color="#a0a0a0" fs="14px">
                    Назад
                  </Text>
                </Flex>
              </NavbarLink>
              <NavbarLink fs="14px" color="white" to="/:id">
                {userPage.lastName} {userPage.firstName}
              </NavbarLink>
              <Img
                src={userPage.avatar ? userPage.avatar : defAvatar}
                width="30px"
                height="30px"
                br="50%"
              ></Img>
            </StyledDialogueUp>
          )}
          <StyledDialogueMessages ref={messagesEndRef}>
            {dialogue?.map((el: TDialogue, index: number) => (
              <Flex key={index} display="flex" alignitems="center" gap="8px">
                <Img
                  src={el.user.avatar ? el.user.avatar : defAvatar}
                  width="36px"
                  height="36px"
                  br="50%"
                ></Img>
                <Flex display="flex" flexdirection="column" gap="5px">
                  <Flex
                    width="435px"
                    display="flex"
                    justifycontent="space-between"
                  >
                    <NavbarLink to={"/" + el.user.id}>
                      <Text color="#64a1ff" fs="14px">
                        {el.user.firstName}
                      </Text>
                    </NavbarLink>
                    <Flex display="flex" gap="5px">
                      {el.user.id !== Number(id) && (
                        <>
                          <Img
                            onClick={() => handleEdit(el.id, el.message, index)}
                            cursor="pointer"
                            src={change}
                            width="20px"
                            height="20px"
                          ></Img>
                          <Img
                            cursor="pointer"
                            onClick={() => handleDelete(el.id, index)}
                            src={removal}
                            width="20px"
                            height="20px"
                          ></Img>
                        </>
                      )}
                    </Flex>
                  </Flex>
                  <Area width="50px">
                    <Text width="380px" color="white" fs="14px">
                      {el.message}
                    </Text>
                  </Area>
                </Flex>
              </Flex>
            ))}
            <Flex
              display="flex"
              flexdirection="column-reverse"
              height="600px"
              ref={messagesEndRef}
            >
              <Text> {typing}</Text>
            </Flex>
          </StyledDialogueMessages>

          <StyledDialogueBottom height={isvisibleEditing ? 80 : 60}>
            {isvisibleEditing && (
              <Flex width="490px" display="flex" justifycontent="space-between">
                <Text color="#e9e9e9">Редактирование сообщения</Text>
                <Text cursor="pointer" onClick={closeEditing}>
                  ✖
                </Text>
              </Flex>
            )}
            <Flex
              display="flex"
              justifycontent="space-between"
              alignitems="flex-end"
              gap="10px"
            >
              <Textarea
                onChange={handleMessageChange}
                onKeyUp={debounce(handleMessage, 5000)}
                wrap="hard"
                border="1px solid #373737"
                br="5px"
                padding="10px 10px"
                width="450px"
                height="36px"
                placeholder="Напишите сообщение..."
                bc="#222222"
                color="#e9e9e9"
                maxLength={600}
                value={value}
              ></Textarea>
              {isvisibleEditing ? (
                <Img
                  onClick={handleSave}
                  cursor="pointer"
                  src={checkMark}
                  width="30px"
                  height="30px"
                ></Img>
              ) : (
                <Img
                  cursor="pointer"
                  onClick={handleSend}
                  src={send}
                  width="40px"
                  height="40px"
                ></Img>
              )}
            </Flex>
          </StyledDialogueBottom>
        </StyledDialogСontainer>
        <StyledCardNav>
          <NavbarLink
            display="flex"
            width="100%"
            height="30px"
            br="5px"
            padding="8px"
            to="/messages"
            hidebackground
          >
            <Text fs="13px">Все чаты</Text>
          </NavbarLink>
          {userPage && (
            <NavbarLink
              background=" #3a3a3a"
              display="flex"
              width="100%"
              height="30px"
              br="5px"
              padding="8px"
              to={"#"}
              color="#dedede"
              fs="13px"
            >
              {userPage.lastName} {userPage.firstName}
            </NavbarLink>
          )}
        </StyledCardNav>
      </Flex>
    </MainPage>
  );
};
