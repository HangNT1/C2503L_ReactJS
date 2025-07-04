import { useState } from "react";

const EventComponent = () => {
  const [message, setMessage] = useState("aaa");
  // Ham xu ly su kien khi nguoi dung nhap gia tri vao o input
  const changeValue = (e) => {
    // e: event
    // e.target.value : La ham lay gia tri cua o input khi nhap
    setMessage(e.target.value);
  };
  return (
    <>
      <h1>Event</h1>
      Message: <input type="text" value={message} onChange={changeValue} />
      <p>Value: {message}</p>
    </>
  );
};

export default EventComponent;
