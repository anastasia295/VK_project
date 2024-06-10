import { Cards } from "../cards/Cards";

export function Communities() {
  return (
    <Cards
      navCenter="Все сообщества"
      navImportantCenter="Важные сообщества"
      name="Название сообщества"
      сategoryActivity="Категория"
      navRight="Мои сообщества"
      navFavoritesRight="Избранные сообщества"
      InputCenter={false}
      numberSubscribers={true}
      numberSubscribers2="Количество подписчиков"
    ></Cards>
  );
}
