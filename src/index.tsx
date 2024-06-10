import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  
}`;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <Global />
    <App />
  </>
);
