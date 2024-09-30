const timeMap = {
  minutes: ["минуту", "минуты", "минут"],
  hours: ["час", "часа", "часов"],
  days: ["день", "дня", "дней"],
  weeks: ["неделю", "недели", "недель"],
  months: ["месяц", "месяца", "месяцев"],
  years: ["год", "года", "лет"],
};

export const getLastOnline = (lastOnline: string, gender: string) => {
  const genderRole = gender === "man" ? `Заходил` : `Заходила`;

  const current = new Date();
  const last = new Date(lastOnline);
  const diff = current.getTime() - last.getTime();
  const time = last.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const lastVisit = last.toLocaleDateString();
  const date = current.toLocaleDateString();
  last.setDate(last.getDate() + 1);
  const tomorrowDate = last.toLocaleDateString(); // дата последнего визита +1 день
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3.6e6);
  const rowMinutes = timeMap.minutes;
  const rowHours = timeMap.hours;

  if (minutes >= 10 && minutes <= 20) {
    return `${genderRole} последний раз ${minutes} ${rowMinutes[2]} назад`;
  }
  if (minutes >= 60 && hours === 1) {
    return `${genderRole} последний раз ${hours} ${rowHours[0]} назад`;
  }
  if (minutes > 60 && hours > 1 && hours < 5) {
    return `${genderRole} последний раз ${hours} ${rowHours[1]} назад`;
  }
  if (minutes > 60 && hours > 4 && hours < 13) {
    return `${genderRole} последний раз ${hours} ${rowHours[2]} назад`;
  }

  if (date !== lastVisit && hours > 12 && hours <= 24) {
    return `${genderRole} последний раз вчера в ${time}`;
  }

  if (date === lastVisit && hours > 12 && hours <= 24) {
    return `${genderRole} последний раз сегодня в ${time}`;
  }

  if (tomorrowDate === date && hours > 24 && hours < 48) {
    return `${genderRole} последний раз вчера в ${time}`; //неверно
  }
  if (tomorrowDate !== date && hours > 24 && hours <= 48) {
    return `${genderRole} последний раз ${lastVisit} в ${time}`;
  }
  if (hours > 48) {
    return `${genderRole} последний раз ${lastVisit} в ${time}`;
  }
  const lastDigit = minutes % 10;

  if (lastDigit === 1) {
    return `${genderRole} последний раз ${minutes} ${rowMinutes[0]} назад`;
  }
  if (lastDigit > 1 && lastDigit < 5) {
    return `${genderRole} последний раз ${minutes} ${rowMinutes[1]} назад`;
  }
  if (minutes === 0) {
    return `Онлайн`;
  }
  return `${genderRole} последний раз ${minutes} ${rowMinutes[2]} назад `;
};
