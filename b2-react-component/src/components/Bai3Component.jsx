import { useState } from "react";

const Bai3Component = () => {
  const [isAdmin, setAdmin] = useState(true);
  const clickMe = () => {
    // isAdmin: true (!true) = false
    // !false = true
    setAdmin(!isAdmin);
  };
  return (
    <>
      <p>{isAdmin ? "Xin chào, admin" : "Xin chào, người dùng"}</p>
      <button onClick={clickMe}>Change Value</button>
    </>
  );
};
export default Bai3Component;
