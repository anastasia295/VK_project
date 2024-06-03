import React from "react";
import { SignIn } from "./components/signIn/SignIn";
import { SignUp } from "./components/signUp/SignUp";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Page } from "./pages/Page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="entrance" element={<SignIn />} />
          <Route path="entrance/gregistration" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
