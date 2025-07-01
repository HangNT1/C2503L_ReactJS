import { useState } from "react";
import Bai3 from "./Bai3.jsx";

const Bai2 = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <button onClick={() => setIsLogin(!isLogin)}>
      {isLogin ? "Dang xuat" : "Dang nhap"}
    </button>
  );
};

export default Bai2;
