import { Navigate, Outlet } from "react-router-dom";
import axios from "../axios/axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TUser, TUserResponse } from "../../types/user";
import { updateUser } from "../../store/slices/AuthSlice";
import { socket } from "../../api/socket";
import {
  addFriend,
  addFriendsFriend,
  addOffer,
  deleteFriend,
  deleteFriendsFriend,
  deleteOffer,
  deleteRequest,
  updateFriends,
  updateOffers,
  updateRequest,
} from "../../store/slices/FriendsSlice";

import { updatePage } from "../../store/slices/PageSlice";
import { AxiosError } from "axios";
import {
  addDialogue,
  addNotification,
  deleteDialogue,
  deleteNotification,
  updateDialogue,
  updateMessages,
  updateTyping,
} from "../../store/slices/MessagesSlice";
import { TDialogue } from "../../types/message";
import { cloneDeep } from "lodash";

const PrivateRoute = () => {
  const [userMe, setUserMe] = useState<TUser | null>(
    useSelector((state: RootState) => state.auth.user)
  );
  const userPage = useSelector((state: RootState) => state.page.page) as TUser;
  const dialogue = useSelector(
    (state: RootState) => state.messages.dialogue
  ) as TDialogue[];
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const arrMessages = useSelector(
    (state: RootState) => state.messages.messages
  );

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { data },
        } = await axios.get<TUserResponse>("user");
        setUserMe(data);
        dispatch(updateUser(data));
        setIsLoading(false);
      } catch (err) {
        setUserMe(null);
        dispatch(updateUser(null));
        setIsLoading(false);
      }
    };
    if (!userMe) {
      getUser();
    } else {
      socket.auth = { id: userMe.id };
      socket.connect();
      setIsLoading(false);
    }
  }, [dispatch, userMe]);

  useEffect(() => {
    async function fetchFriend() {
      const { data } = await axios.get("friend/offers");
      dispatch(updateOffers(data.data));
    }
    fetchFriend();
  }, [dispatch]);

  useEffect(() => {
    async function fetchFriend() {
      const { data } = await axios.get("friend/requests");
      dispatch(updateRequest(data.data));
    }
    fetchFriend();
  }, [dispatch]);

  useEffect(() => {
    socket.on("friend:add", async (id) => {
      let user: TUser;
      if (userPage?.id === id) {
        user = {
          ...userPage,
          friendStatus: userPage.friendStatus === "none" ? "offer" : "friend",
        };
      } else {
        const { data } = await axios.get(`user/${id}`);
        user = data.data;
      }
      if (user.friendStatus === "offer") {
        dispatch(addOffer(user));
      } else if (user.friendStatus === "friend") {
        dispatch(deleteRequest({ id }));
        dispatch(addFriend(user));
        dispatch(addFriendsFriend(userMe));
      }
      userPage && userPage.id === id && dispatch(updatePage(user));
    });

    socket.on("friend:delete", (id) => {
      let user: TUser;
      if (userPage?.id === id) {
        user = {
          ...userPage,
          friendStatus: userPage.friendStatus === "offer" ? "none" : "none",
        };
        dispatch(updatePage(user));
      }
      dispatch(deleteFriend({ id }));
      dispatch(deleteOffer({ id }));
      dispatch(deleteRequest({ id }));
      dispatch(deleteFriendsFriend({ id: userMe?.id }));
    });
    return () => {
      socket.off("friend:add");
      socket.off("friend:delete");
    };
  }, [dispatch, userPage, userMe]);

  useEffect(() => {
    async function fethFriend() {
      try {
        const { data } = await axios.get("friend");
        dispatch(updateFriends(data.data));
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }
    fethFriend();
  }, [dispatch]);

  useEffect(() => {
    async function fetchChat() {
      try {
        const { data } = await axios.get("chat/");
        dispatch(updateMessages(data.data));
      } catch (err: unknown) {
        const error = err as AxiosError;
        console.error(error.message);
      }
    }

    fetchChat();
  }, [dispatch]);

  useEffect(() => {
    socket.on("message:add", async (mes) => {
      let user: TUser;
      const { data } = await axios.get(`user/${mes.id}`);
      user = data.data;
      if (user) {
        if (user.id === mes.id) {
          if (mes.id === user.id) {
            dispatch(addDialogue({ message: mes.message, user: user }));
          }
          const cloneArrMessages = cloneDeep(arrMessages);
          let index: number | undefined;
          arrMessages.forEach((el) => {
            if (el.user.id === user.id) {
              index = arrMessages.indexOf(el);
            }
          });
          if (index !== undefined) {
            if (cloneArrMessages[index].user.id === user.id) {
              cloneArrMessages[index].lastMessage.message = mes.message;
              cloneArrMessages[index].lastMessage.user = user;
              dispatch(updateMessages(cloneArrMessages));
              console.log(cloneArrMessages, "cloneArrMessages");
            }
          }
        }
      }
    });

    socket.on("message:editing", async (mes) => {
      let user: TUser;
      const { data } = await axios.get(`user/${mes.id}`);
      user = data.data;
      if (user) {
        if (mes.id === user.id) {
          const cloneDialogue = cloneDeep(dialogue);
          if (cloneDialogue[mes.index]) {
            cloneDialogue[mes.index].message = mes.message;
            dispatch(updateDialogue(cloneDialogue));
          }
          const cloneArrMessages = cloneDeep(arrMessages);
          let index: number | undefined;
          arrMessages.forEach((el) => {
            if (el.user.id === user.id) {
              index = arrMessages.indexOf(el);
            }
          });
          if (index !== undefined) {
            if (cloneArrMessages[index].user.id === user.id) {
              cloneArrMessages[index].lastMessage.message = mes.message;
              cloneArrMessages[index].lastMessage.user = user;
              dispatch(updateMessages(cloneArrMessages));
            }
          }
        }
      }
    });

    socket.on("message:typing", async (id) => {
      let user: TUser;
      const { data } = await axios.get(`user/${id}`);
      user = data.data;
      if (user) {
        if (id === user.id) {
          dispatch(updateTyping("Печатает..."));
        }
      }
    });

    socket.on("message:nottyping", async (id) => {
      let user: TUser;
      const { data } = await axios.get(`user/${id}`);
      user = data.data;
      if (user) {
        if (id === user.id) {
          dispatch(updateTyping(""));
        }
      }
    });

    socket.on("message:notification", async (mes: any) => {
      let user: TUser;
      const { data } = await axios.get(`user/${mes.id}`);
      user = data.data;
      if (user) {
        if (mes.id === user.id) {
          dispatch(addNotification(mes.id));
        }
      }
    });

    socket.on("message:delete", async (mes: any) => {
      console.log(mes, "mes");
      let user: TUser;
      const { data } = await axios.get(`user/${mes.id}`);
      user = data.data;
      if (user) {
        if (mes.id === user.id) {
          dispatch(deleteDialogue({ index: mes.index }));
          // dispatch(deleteNotification(mes.id));
          //удаляет сообщение любое и уведомление пропадает, а нужно чтобы
          //непрочитанное сообщение удалял и уведомление пропадало
          console.log(dialogue, "удаление");
        }
        try {
          const { data } = await axios.get(`chat/${mes.id}`);
          dispatch(updateDialogue(data.data));
          console.log(data.data, "data");
          const cloneArrMessages = cloneDeep(arrMessages);
          let index: number | undefined;
          cloneArrMessages.forEach((el) => {
            if (el.user.id === user.id) {
              index = cloneArrMessages.indexOf(el);
            }
          });

          let item = data.data[data.data.length - 1];
          if (index !== undefined && item !== undefined) {
            if (cloneArrMessages[index].user.id === user.id) {
              cloneArrMessages[index].lastMessage.message = item.message;
              dispatch(updateMessages(cloneArrMessages));
            }
          }
        } catch (err: unknown) {
          const error = err as AxiosError;
          console.error(error.message);
        }
      }
    });

    return () => {
      socket.off("message:add");
      socket.off("message:delete");
      socket.off("message:typing");
      socket.off("message:nottyping");
      socket.off("message:editing");
      socket.off("message:notification");
    };
  }, [dialogue, dispatch, userPage, arrMessages]);

  if (isLoading) {
    return null;
  }

  return userMe ? <Outlet /> : <Navigate to="/entrance" />;
};

export default PrivateRoute;
