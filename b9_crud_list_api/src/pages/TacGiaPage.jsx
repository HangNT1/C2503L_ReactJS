import { useEffect, useState } from "react";
import TacGiaFormComponent from "../components/TacGiaFormComponent";

// Tao API tren mock API
const API = "https://6863d70088359a373e96838c.mockapi.io/tac_gia";

export default function TacGiaPage() {
  const [list, setList] = useState([]);
  const [isUpdate, setIsUpdate] = useState(null);
  const [tacGiaForm, setTacGiaForm] = useState({
    ten: "",
    loai: "",
    gia: 0,
    id: 0,
  });
  // READ => Get All => Load du lieu len table
  // async: xu ly dong bo bat dong ho => thuong dung trong method khi goi api
  const loadData = async () => {
    const response = await fetch(API);
    const data = await response.json(); // tra ve dinh dang json
    setList(data);
  };
  // useEffect
  useEffect(() => {
    loadData();
  }, []); // Chi goi lan dau tien khi dom duoc khoi tao

  // Cap nhat gia tri cua isUpdate thay doi khi moi lan click vao button detail
  useEffect(() => {
    if (isUpdate) {
      setTacGiaForm(isUpdate);
    }
  }, [isUpdate]);

  // DELETE
  const handleDelete = async (id1) => {
    await fetch(`${API}/${id1}`, { method: "DELETE" });
    loadData();
  };
  // change:
  const handleChange = (e) => {
    setTacGiaForm({
      ...tacGiaForm,
      [e.target.name]: e.target.value,
    });
  };
  // handlesubmit - viet add & update
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      ...tacGiaForm,
      gia: Number(tacGiaForm.gia),
      id: Number(tacGiaForm.id),
    };
    // neu id co gia => Update
    if (tacGiaForm.id) {
      // Update
      await fetch(`${API}/${tacGiaForm.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } else {
      // id => add
      await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    // lam sach form
    setTacGiaForm({ ten: "", loai: "", gia: 0, id: 0 });
    setIsUpdate(null);
    loadData();
  };
  const handleReset = () => {
    setTacGiaForm({ ten: "", loai: "", gia: 0, id: 0 });
    setIsUpdate(null);
  };
  return (
    <>
      <h1>Quản lý tác giả </h1>
      <TacGiaFormComponent
        handleChange={handleChange}
        tacGiaForm={tacGiaForm}
        isUpdate={isUpdate}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Loại</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {/* Giong hien du lieu dot truoc => map  */}
          {list.map((tg, index) => (
            <tr key={tg.id}>
              <td>{index + 1}</td>
              <td>{tg.ten}</td>
              <td>{tg.loai}</td>
              <td>{tg.gia}</td>
              <td>
                <button onClick={() => setIsUpdate(tg)}>Detail</button>
                <button onClick={() => handleDelete(tg.id)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
