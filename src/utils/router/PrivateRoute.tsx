import { Navigate, Outlet } from "react-router-dom";
import axios from "../axios/axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store/Store";
import { TUser, TUserResponse } from "../../types/user";
import { updateUser } from "../../store/slices/AuthSlice";

const PrivateRoute = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<TUser | null>(
    useSelector((state: RootState) => state.auth.user)
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const {
          data: { data },
        } = await axios.get<TUserResponse>("user");
        setUser(data);
        dispatch(updateUser(data));
        setIsLoading(false);
      } catch (err) {
        setUser(null);
        dispatch(updateUser(null));
        setIsLoading(false);
      }
    };
    if (!user) {
      getUser();
    } else {
      setIsLoading(false);
    }
  }, [dispatch, user]);

  if (isLoading) {
    return null;
  }

  return user ? <Outlet /> : <Navigate to="/entrance" />;
};

export default PrivateRoute;
