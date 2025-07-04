import { useState } from "react";

export default function Bai1Component() {
  const [count, setCount] = useState(0);
  function tang() {
    setCount(count + 1);
  }
  function giam() {
    setCount(count - 1);
  }
  function reset() {
    setCount(0);
  }
  return (
    <>
      <p>{count}</p>
      <button onClick={tang}>tang</button>
      <button onClick={giam}>giam</button>
      <button onClick={reset}>reset</button>
    </>
  );
}
