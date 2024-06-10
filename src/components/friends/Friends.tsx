import { Cards } from "../cards/Cards";

export function Friends() {
  return (
    <Cards
      navCenter="Все друзья"
      navImportantCenter="Важные друзья"
      name="Кот Котов"
      сategoryActivity="Дела кошачьи"
      numberSubscribers={false}
      navRight="Мои друзья"
      navFavoritesRight="Избранные друзья"
      InputCenter={true}
      numberSubscribers3="Написать сообщение"
    ></Cards>
  );
}
