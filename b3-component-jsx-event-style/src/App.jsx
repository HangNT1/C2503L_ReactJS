import "./App.css";
import HeaderComponent from "./components/style/header/HeaderComponent";
import StyleComponent from "./components/style/StyleComponnt";

function App() {
  return (
    <>
      <h1>Buoi 3 - Component (tiep) & Style & Event</h1>

      {/* 1. Tao 1 project ReactJS: 
      - Gom 1 button - Click me, 1 text hien thi so lan click. Moi lan click gia tri tang len 
      2. Tao 1 project React JS:
      - Gom Button hien thi gia tri "Dang nhap".
      - Moi lan click vao button thi gia tri cua button chuyen tu Dang nhap -> Dang Xuat va nguoc lai  */}
      {/* <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3> */}
      {/* <LoopComponent></LoopComponent> */}
      {/* <Bai5Component></Bai5Component> */}
      <StyleComponent></StyleComponent>
      <HeaderComponent></HeaderComponent>
    </>
  );
}

export default App;
