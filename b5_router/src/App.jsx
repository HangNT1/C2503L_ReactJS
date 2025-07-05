import logo from "./logo.svg";
import "./App.css";
import TestComponent from "./component/TestComponent";
import Test1Component from "./component/Test1Component";
import SinhVienComponent from "./component/SinhVienComponent";
import HeaderComponent from "./component/header/HeaderComponent";
import AppRoutes from "./router";

function App() {
  // const messsage = "Test Demo - Component";
  // const SinhVien = {
  //   name: "a",
  //   tuoi: "12",
  // };
  return (
    <>
      {/* <h1>Buoi 5 - Router</h1>
      <TestComponent a={messsage}></TestComponent>
      {/* 
      Cha: App.jsx
      Con: TestComponent.jsx
      // Truyen gia tri tu Cha => Con: props 
      App => TestComponent
      */}
      {/* <Test1Component></Test1Component>
      <SinhVienComponent a={SinhVien}></SinhVienComponent>  */}
      <HeaderComponent></HeaderComponent>
      {/* Main */}
      <AppRoutes />
      {/* Foouter */}
    </>
    // Tao 1 doi tuong SinhVien: mssv - String, ten - String, tuoi - Number.
    // Tao 1 component con => hien thi gia tri cua doi tuong sv sang compoennt con
  );
}

export default App;
