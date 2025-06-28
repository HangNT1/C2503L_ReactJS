import FooterComponent from "./component/FooterComponent";
import HeaderComponent1 from "./component/header/HeaderComponent";
import MainComponent from "./component/main/MainComponent";

function App() {
  return (
    // 1 the => 1 view
    // Chua the con: <> </>
    <>
      {/* Chi nen goi component => TAO RA CAC FILE .JSX => APP.JSX => GOI  */}
      <HeaderComponent1></HeaderComponent1>
      <MainComponent></MainComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}

export default App;
