import { useRef, useState } from "react";

export default function Event1Component() {
  // Tao ref de tham chieu den input cua o input trong dom
  const inputRef = useRef();
  const [message, setMessage] = useState();
  //   function showValue() {
  //     alert("aaaa: " + inputRef.current.value);
  //   }
  function changeData() {
    setMessage(inputRef.current.value);
  }
  return (
    <>
      <h1>aaa</h1>
      Message :<input ref={inputRef} onChange={changeData} />
      {/* <button onClick={showValue}>Show value</button> */}
      <p>Value: {message}</p>
    </>
  );
}
