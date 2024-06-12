import React from "react";
import { SignIn } from "./components/signIn/SignIn";
import { SignUp } from "./components/signUp/SignUp";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Page } from "./pages/Page";
import { Messages } from "./components/messages/Messages";
import { MyPage } from "./components/myPage/MyPage";
import { Friends } from "./components/friends/Friends";
import { Communities } from "./components/communities/Communities";
import { Photos } from "./components/photos/Photos";
import { Dialogue } from "./components/dialogue/Dialogue";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="entrance" element={<SignIn />} />
          <Route path="entrance/gregistration" element={<SignUp />} />
          <Route path="messages" element={<Messages />} />
          <Route path="mypage" element={<MyPage />} />
          <Route path="friends" element={<Friends />} />
          <Route path="communities" element={<Communities />} />
          <Route path="photos" element={<Photos />} />
          <Route path="Dialogue" element={<Dialogue />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
