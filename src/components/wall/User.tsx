import { useState } from "react";
import "./User.css";

function User() {
  const [valueName, setValueName] = useState<any>("");
  const [valuePhone, setValuePhone] = useState<any>("");
  const [arrUser, setArrUser] = useState<any>([]);

  function onchangeName(event: any) {
    setValueName(event.target.value);
  }
  function onchangePhone(event: any) {
    setValuePhone(event.target.value);
  }

  function handleAdd(event: any) {
    if (valueName.length !== 0 && valuePhone.length !== 0) {
      setArrUser((prev: any) => [
        ...prev,
        {
          name: valueName,
          phone: valuePhone,
        },
      ]);
      setValueName("");
      setValuePhone("");
    }
  }

  console.log(arrUser, "arr");
  function handleDelete(index: any) {
    if (arrUser.length !== 0) {
      const filterUser = arrUser.filter((_: any, i: any) => index !== i);
      setArrUser(filterUser);
    }
  }

  return (
    <div className="container">
      <h1>Contact List</h1>
      <div className="wrapper">
        <input
          onChange={onchangeName}
          value={valueName}
          type="text"
          placeholder="name"
        ></input>
        <input
          onChange={onchangePhone}
          value={valuePhone}
          type="text"
          placeholder="phone"
        ></input>
        <button onClick={handleAdd}>add</button>
      </div>
      <div>
        {arrUser.length > 0 &&
          arrUser.map((el: any, index: any) => {
            return (
              <div key={index} className="div">
                <span> {el.name}</span>
                <span> {el.phone}</span>
                <button onClick={(e: any) => handleDelete(index)}>
                  удалить
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default User;
