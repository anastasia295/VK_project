import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import Store from "./store/store/Store";

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
    <Provider store={Store}>
      <Global />
      <App />
    </Provider>
  </>
);
