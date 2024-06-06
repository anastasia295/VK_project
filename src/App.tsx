import React from "react";
import { SignIn } from "./components/signIn/SignIn";
import { SignUp } from "./components/signUp/SignUp";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Page } from "./pages/Page";
import { Messages } from "./components/messages/Messages";
import { MyPage } from "./components/MyPage/MyPage";
import { Friends } from "./components/friends/Friends";
import { Communities } from "./components/communities/Communities";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="entrance" element={<SignIn />} />
          <Route path="entrance" element={<SignIn />} />
          <Route path="entrance/gregistration" element={<SignUp />} />
          <Route path="entrance/messages" element={<Messages />} />
          <Route path="entrance/mypage" element={<MyPage />} />
          <Route path="entrance/friends" element={<Friends />} />
          <Route path="entrance/communities" element={<Communities />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
