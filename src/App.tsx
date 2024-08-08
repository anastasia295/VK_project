import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Messages } from "./components/messages/Messages";
import { Friends } from "./components/friends/Friends";
import { Communities } from "./components/communities/Communities";
import { Photos } from "./components/photos/Photos";
import { Dialogue } from "./components/dialogue/Dialogue";
import { Editing } from "./components/editing/Editing";
import { PersonalData } from "./components/personalData/PersonalData";
import PrivateRoute from "./utils/router/PrivateRoute";
import { SignIn } from "./components/auth/signIn/SignIn";
import { SignUp } from "./components/auth/signUp/SignUp";
import { Search } from "./components/search/Search";
import { MyPage } from "./components/myPage/MyPage";
import { FriendRequests } from "./components/friendRequests/FriendRequests";
import { UserFriends } from "./components/friends/UserFriends";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="entrance" element={<SignIn />} />
          <Route path="registration" element={<SignUp />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Friends />} />
            <Route path="/:id" element={<MyPage />} />
            <Route path="friends" element={<Friends />} />
            <Route path="communities" element={<Communities />} />
            <Route path="photos" element={<Photos />} />
            <Route path="Dialogue" element={<Dialogue />} />
            <Route path="editing" element={<Editing />} />
            <Route path="personalData" element={<PersonalData />} />
            <Route path="messages" element={<Messages />} />
            <Route path="search" element={<Search />} />
            <Route path="friendRequests" element={<FriendRequests />} />

            <Route path="/:id/friends" element={<UserFriends />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
