import { useState } from "react";

export default function Bai6Component() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
      setMessage("");
    } else {
      setMessage("Khong the them duoc nua");
    }
  };
  const decrement = () => {
    if (count > -10) {
      setCount(count - 1);
      setMessage("");
    } else {
      setMessage("Khong the giam duoc nua");
    }
  };

  return (
    <>
      <p>{message}</p>
      <p>{count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
}
