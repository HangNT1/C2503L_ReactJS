import logo from "./logo.svg";
import "./App.css";
import Bai3Component from "./component/btvn/Bai3Component";
import Bai6Component from "./component/btvn/Bai6Component";
import Bai1Component from "./component/btvn/Bai1Component";
import EventComponent from "./component/trenlop/event/EventComponent";
import Event1Component from "./component/trenlop/event/Event1Component";
import CaluclateComponent from "./component/trenlop/event/CaluclateComponent";
import DemoGioComponent from "./component/trenlop/event/DemGioComponent";

function App() {
  return (
    <>
      <Bai3Component></Bai3Component>
      <Bai6Component></Bai6Component>
      <Bai1Component></Bai1Component>
      <EventComponent></EventComponent>
      <h1>C2</h1>
      <Event1Component></Event1Component>
      <CaluclateComponent></CaluclateComponent>
      <DemoGioComponent></DemoGioComponent>
    </>
  );
}

export default App;
