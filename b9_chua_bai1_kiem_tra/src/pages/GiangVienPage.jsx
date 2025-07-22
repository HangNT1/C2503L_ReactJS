import { useState } from "react";
import GiangVienFormComponent from "../components/GiangVienFormComponent";

const GiangVienPage = () => {
  const listGiangVien = [
    {
      ma: "ma 1",
      ten: "ten 1",
      tuoi: 86,
      chuyenNganh: "Chuyên ngành 1",
      gioiTinh: false,
      ngaySinh: "2025-01-16",
      id: "1",
    },
    {
      ma: "ma 2",
      ten: "ten 2",
      tuoi: 56,
      chuyenNganh: "Chuyên ngành 2",
      gioiTinh: true,
      ngaySinh: "2025-01-17",
      id: "2",
    },
    {
      ma: "ma 3",
      ten: "ten 3",
      tuoi: 58,
      chuyenNganh: "Chuyên ngành 3",
      gioiTinh: false,
      ngaySinh: "2030-01-16",
      id: "3",
    },
    {
      ma: "ma 4",
      ten: "ten 4",
      tuoi: 79,
      chuyenNganh: "Chuyên ngành 3",
      gioiTinh: false,
      ngaySinh: "2029-01-16",
      id: "4",
    },
    {
      ma: "ma 5",
      ten: "ten 5",
      tuoi: 71,
      chuyenNganh: "Chuyên ngành 3",
      gioiTinh: true,
      ngaySinh: "2026-01-16",
      id: "5",
    },
    {
      ma: "ma 6",
      ten: "ten 6",
      tuoi: 89,
      chuyenNganh: "Chuyên ngành 3",
      gioiTinh: false,
      ngaySinh: "2025-08-16",
      id: "6",
    },
    {
      ma: "ma 7",
      ten: "ten 7",
      tuoi: 54,
      chuyenNganh: "Chuyên ngành 3",
      gioiTinh: true,
      ngaySinh: "2025-02-16",
      id: "7",
    },
    {
      ma: "ma 8",
      ten: "ten 8",
      tuoi: 41,
      chuyenNganh: "Chuyên ngành 3",
      gioiTinh: false,
      ngaySinh: "2025-03-16",
      id: "8",
    },
    {
      ma: "ma 9",
      ten: "ten 9",
      tuoi: 90,
      chuyenNganh: "Chuyên ngành 2",
      gioiTinh: true,
      ngaySinh: "2025-08-16",
      id: "9",
    },
    {
      ma: "ma 10",
      ten: "ten 10",
      tuoi: 91,
      chuyenNganh: "Chuyên ngành 2",
      gioiTinh: false,
      ngaySinh: "2025-08-16",
      id: "10",
    },
  ];

  const [mentors, setMentors] = useState(listGiangVien);
  const [formMentor, setFormMentor] = useState({
    id: "",
    ma: "",
    ten: "",
    tuoi: "",
    chuyenNganh: "",
    gioiTinh: false,
    ngaySinh: "",
  });

  const [updateItem, setUpdateItem] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormMentor({
      ...formMentor,
      [name]: name === "gioiTinh" ? value === "true" : value,
    });
  };

  const handleDetail = (item) => {
    setFormMentor({
      ...item,
      ngaySinh: item.ngaySinh || "",
    });
    setUpdateItem(item.id);
  };

  const handleDelete = (index) => {
    const listCopy = [...mentors];
    listCopy.splice(index, 1);
    setMentors(listCopy);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (updateItem) {
      const updatedMentor = {
        ...formMentor,
        tuoi: Number(formMentor.tuoi),
        id: updateItem,
      };
      const updatedList = mentors.map((m) =>
        m.id === updateItem ? updatedMentor : m
      );
      setMentors(updatedList);
    } else {
      const newMentor = {
        ...formMentor,
        id: Number(formMentor.id),
        tuoi: Number(formMentor.tuoi),
      };
      setMentors([...mentors, newMentor]);
    }
    handleReset();
  };
  const handleReset = () => {
    setFormMentor({
      ma: "",
      ten: "",
      tuoi: 0,
      chuyenNganh: "Chuyên ngành 1",
      gioiTinh: true,
      ngaySinh: "",
      id: 0,
    });
    setUpdateItem(null);
  };

  return (
    <>
      <GiangVienFormComponent
        handleSubmit={handleSubmit}
        form={formMentor}
        handleReset={handleReset}
        handleChange={handleChange}
        updateItem={updateItem}
      />

      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Mã</th>
            <th>Tên</th>
            <th>Tuổi</th>
            <th>Chuyên ngành</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {mentors.map((item, index) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.ma}</td>
              <td>{item.ten}</td>
              <td>{item.tuoi}</td>
              <td>{item.chuyenNganh}</td>
              <td>{item.gioiTinh ? "Nam" : "Nữ"}</td>
              <td>{item.ngaySinh}</td>
              <td>
                <button onClick={() => handleDetail(item)}>Detail</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default GiangVienPage;
