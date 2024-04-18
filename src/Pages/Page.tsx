import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

export function Page() {
  return (
    <div>
      <ul>
        <li>
          <Link to="">Главная</Link>
        </li>
        <li>
          <Link to="entrance">Вход</Link>
        </li>
        <li></li>
      </ul>
    </div>
  );
}
