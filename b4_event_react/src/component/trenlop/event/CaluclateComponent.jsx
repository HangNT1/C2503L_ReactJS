import { useRef, useState } from "react";

export default function CaluclateComponent() {
  const numberFirstRef = useRef();
  const numberSecondtRef = useRef();
  const [result, setResult] = useState(0);
  const tinhTongHaiSo = () => {
    // Lay gia tri cua bien ref tu o input
    const soThuNhat = numberFirstRef.current.value;
    const soThuHai = numberSecondtRef.current.value;
    // Tinh tong
    setResult(Number.parseFloat(soThuNhat) + Number.parseFloat(soThuHai));
  };
  const tinhHieuHaiSo = () => {
    // Lay gia tri cua bien ref tu o input
    const soThuNhat = numberFirstRef.current.value;
    const soThuHai = numberSecondtRef.current.value;
    // Tinh tong
    setResult(Number.parseFloat(soThuNhat) - Number.parseFloat(soThuHai));
  };
  const tinhTichHaiSo = () => {
    // Lay gia tri cua bien ref tu o input
    const soThuNhat = numberFirstRef.current.value;
    const soThuHai = numberSecondtRef.current.value;
    // Tinh tong
    setResult(Number.parseFloat(soThuNhat) * Number.parseFloat(soThuHai));
  };
  const tinhThuongHaiSo = () => {
    // Lay gia tri cua bien ref tu o input
    const soThuNhat = numberFirstRef.current.value;
    const soThuHai = numberSecondtRef.current.value;
    // Tinh tong
    setResult(Number.parseFloat(soThuNhat) / Number.parseFloat(soThuHai));
  };
  return (
    <>
      Number 1: <input type="text" ref={numberFirstRef} />
      <br />
      Number 1: <input type="text" ref={numberSecondtRef} />
      <br />
      <button onClick={tinhTongHaiSo}>Cong</button>
      <button onClick={tinhHieuHaiSo}>Tru</button>
      <button onClick={tinhTichHaiSo}>Nhan</button>
      <button onClick={tinhThuongHaiSo}>Chia</button>
      <p>Ket qua: {result}</p>
    </>
  );
}
