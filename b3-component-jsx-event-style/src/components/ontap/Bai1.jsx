import { useState } from "react";

function Bai1() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  function clickMe() {
    if (count >= 15) {
      setMessage("Qua lon khong the tang");
    } else {
      setCount(count + 1);
      setMessage("");
    }
  }
  function clickMe1() {
    if (count <= -15) {
      setMessage("Qua nho khong the g");
    } else {
      setCount(count - 1);
      setMessage("");
    }
  }
  const resetData = () => {
    setCount(0);
    setMessage("");
  };
  return (
    <>
      <h1>Bai 1</h1>
      <p>{message}</p>
      <p>Count: {count}</p>
      <button onClick={clickMe}>Click me</button>
      <button onClick={clickMe1}> Click me 1</button>
      <button onClick={resetData}> Reset</button>
    </>
  );
}
export default Bai1;
