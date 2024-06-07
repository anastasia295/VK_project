import { NavbarLink } from "../../src/ui/NavbarLink";

import { Flex } from "../ui/Flex";

export function Page() {
  return (
    <Flex display="flex" flexdirection="column">
      <NavbarLink fs="18px" color="black" to="entrance">
        Вход
      </NavbarLink>
      <NavbarLink fs="18px" color="black" to="mypage">
        Главная
      </NavbarLink>
    </Flex>
  );
}
