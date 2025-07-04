import { useState } from "react";

export default function Bai3Component() {
  const [name, setName] = useState("Người dùng");
  const changeName = () => {
    if (name === "Người dùng") {
      setName("React Fan");
    } else {
      setName("Người dùng");
    }
  };
  return (
    <>
      <h1>{name}</h1>
      <button onClick={changeName}>Đổi tên</button>
    </>
  );
}
