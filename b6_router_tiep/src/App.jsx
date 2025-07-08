import "./App.css";
import FooterComponent from "./component/FooterComponent";
import HeaderComponent from "./component/header/HeaderComponent";
import AppRoutes from "./route/route";

function App() {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <AppRoutes />
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
