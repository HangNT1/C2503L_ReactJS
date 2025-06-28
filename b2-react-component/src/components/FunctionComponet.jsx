import { useEffect, useState } from "react";
// Reacthook
// use - useState => cac state(bien) thay doi component
// use - useEffect
// useContext/useMemo ...
function FunctionComponent() {
  const [count1, setCount1] = useState(0);

  // did mount
  // useEffect: 2 ths :
  //  ts1: 1  => arrow function (=>)
  // ts2: 1 depencency (1 mang)
  useEffect(() => {
    console.log("Component did mount: Chay lan dau ");
    // clean up
    return () => {
      console.log("Component will unmount: Chay khi component bi pha huy");
    };
  }, []); // MANG RONG: CHI CHAY 1 LAN DUY NHAT
  // LAN DAU DIEM: DID MOUNT
  // LAN CUOI CUNG: UNMOUNT
  // DID update
  useEffect(() => {
    console.log("Component did update");
  }, [count1]);

  function clickMe() {
    setCount1(count1 + 1);
  }
  // const clickMe2 = ()=>{
  // }
  const styleValue = {
    color: "red",
    fontSize: "100px",
    textAlign: "center",
  };
  const mayTinh = {
    name: "Macbook",
    price: "$100",
    color: "black",
  };
  const imgValue = {
    name: "Meo",
    url: "data:image/jpeg;base64,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",
  };
  return (
    <>
      <h1 style={styleValue}>Day la Function Component</h1>
      {/* jsx: javascript xml */}
      <p>Count = {count1}</p>
      <button onClick={clickMe}>Click me1</button>
      <p>{mayTinh.name}</p>
      <p>{mayTinh.price}</p>
      <p>{mayTinh.color}</p>
      <img src={imgValue.url} alt={imgValue.name} />
    </>
  );
}
export default FunctionComponent;
