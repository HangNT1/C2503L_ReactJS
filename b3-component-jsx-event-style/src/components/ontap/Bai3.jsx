import { useState } from "react";

function Bai3() {
  const [trangThai, setTrangThai] = useState("online");
  function chuyenDoi() {
    if (trangThai === "online") {
      setTrangThai("isActive");
    } else if (trangThai === "isActive") {
      setTrangThai("busy");
    } else if (trangThai === "busy") {
      setTrangThai("offline");
    } else {
      setTrangThai("online");
    }
  }
  return (
    <>
      <h2>{trangThai}</h2>
      <button onClick={chuyenDoi}>chuyen trang thai</button>
    </>
  );
}
export default Bai3;
