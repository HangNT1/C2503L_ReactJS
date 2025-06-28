import { useState } from "react";

function Bai1Component() {
  var [name, setName] = useState("XXX");
  function thayTen() {
    setName("Nguyen Quoc Hung");
  }
  return (
    <>
      <p>{name}</p>
      <button onClick={thayTen}>click</button>
    </>
  );
}
export default Bai1Component;
