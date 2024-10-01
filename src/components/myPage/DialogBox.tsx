import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { StyledDialogBox } from "./DialogBox.styled";
import { Flex } from "../../ui/Flex";
import { Button } from "../../ui/Button";
import { Textarea } from "../../ui/Textarea";
import { Area } from "../../ui/Area";
import { Text } from "../../ui/Text";
import { Img } from "../img/Img";
import { NavbarLink } from "../../ui/NavbarLink";
import close from "../img/img/close.svg";
import defAvatar from "../../components/img/img/defAvatar.png";
import axios from "../../utils/axios/axios";
import { getLastOnline } from "../../utils/getLastOnline";
import { TDialogBox } from "../../types/message";
import { AxiosError } from "axios";

export const DialogBox = ({ open, setModal, userMessage }: TDialogBox) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      document.body.classList.add("modal-open");
    } else {
      dialog.current?.close();
      document.body.classList.remove("modal-open");
    }
  }, [open]);

  const handleSend = async () => {
    if (value.length !== 0) {
      try {
        const message = {
          whom: userMessage.id,
          message: value,
        };
        await axios.post("message/", message);
        setModal(false);
        setValue("");
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
  };
  return createPortal(
    <dialog className="dialog" ref={dialog}>
      <StyledDialogBox>
        <Area position="absolute" top="0px" right="0px">
          <Img
            onClick={() => {
              setModal(false);
            }}
            cursor="pointer"
            width="20px"
            height="20px"
            src={close}
          ></Img>
        </Area>
        <Flex display="flex" justifycontent="space-between">
          <Text>Новое сообщение</Text>
          <NavbarLink
            onClick={() => {
              setModal(false);
            }}
            key={userMessage.id}
            to={"/dialogue/" + userMessage.id}
          >
            <Text
              onClick={() => {
                setModal(false);
              }}
              cursor="pointer"
              color="#64a1ff"
            >
              Перейти к диалогу c {userMessage.firstName}
            </Text>
          </NavbarLink>
        </Flex>
        <Flex display="flex" alignitems="center" gap="10px">
          <Img
            br="50%"
            width="40px"
            height="40px"
            src={userMessage.avatar ? userMessage.avatar : defAvatar}
          ></Img>
          <Flex display="flex" flexdirection="column" gap="5px">
            <NavbarLink to={"/" + userMessage.id}>
              <Text
                onClick={() => {
                  setModal(false);
                }}
                color="#64a1ff"
                cursor="pointer"
                fs="14px"
              >
                {userMessage.firstName} {userMessage.lastName}
              </Text>
            </NavbarLink>
            <Text color="#696968" fs="13px">
              {getLastOnline(userMessage.lastOnline, userMessage.gender)}
            </Text>
          </Flex>
        </Flex>
        <Textarea
          onChange={(event) => {
            setValue(event.target.value);
          }}
          value={value}
          wrap="hard"
          border="1px solid #373737"
          br="10px"
          padding="10px 10px"
          width="452px"
          height="120px"
          bc="#222222"
          color="#e9e9e9"
          maxLength={140}
        ></Textarea>
        <Flex display="flex" justifycontent="right">
          <Button
            onClick={handleSend}
            fs="15px"
            br="8px"
            color="black"
            bc="#c8c8c8"
            height="32px"
            width="100px"
          >
            Отправить
          </Button>
        </Flex>
      </StyledDialogBox>
    </dialog>,
    document.getElementById("root") as HTMLElement
  );
};
