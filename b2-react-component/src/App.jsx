import logo from "./logo.svg";
import "./App.css";
import ClassComponent from "./components/ClassComponent";
import FunctionComponen from "./components/FunctionComponet";
import Bai1Component from "./components/Bai1Component";
import Bai3Component from "./components/Bai3Component";

function App() {
  return (
    <>
      <h1>Buoi 2 - React Component</h1>
      {/* 
        Có 2 loại component trong React JS: 
        - Class Component:  
        - Function Component: loai component moi tu 16.X
        State & Props: Du lieu 
        - States: Bien/Du lieu thay doi ngay ben trong component day 
            + function : useState 
            + class: this.state
        - props: Bien/Du lieu thay doi ngay ben component cha => component con 
      */}
      {/* <ClassComponent></ClassComponent> */}
      <FunctionComponen></FunctionComponen>
      <Bai1Component></Bai1Component>
      <Bai3Component></Bai3Component>
    </>
  );
}

export default App;
