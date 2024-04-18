import React from "react";
import { SignIn } from "./Pages/SignIn";
import { SignUp } from "./Pages/SignUp";
import { BrowserRouter, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Page } from "./Pages/Page";

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
