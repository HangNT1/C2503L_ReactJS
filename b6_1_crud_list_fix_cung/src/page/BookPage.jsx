import { useState } from "react";
import BookFormComponent from "../component/BookFormComponent";
export default function BookPage() {
  const listDefaultBook = [
    {
      ten: "ten 21",
      loai: 25,
      tacGia: "tacGia 21",
      gia: 69,
      id: "21",
    },
    {
      ten: "ten 22",
      loai: 78,
      tacGia: "tacGia 22",
      gia: 85,
      id: "22",
    },
    {
      ten: "ten 23",
      loai: 68,
      tacGia: "tacGia 23",
      gia: 19,
      id: "23",
    },
    {
      ten: "ten 24",
      loai: 1,
      tacGia: "tacGia 24",
      gia: 53,
      id: "24",
    },
    {
      ten: "ten 25",
      loai: 43,
      tacGia: "tacGia 25",
      gia: 32,
      id: "25",
    },
    {
      ten: "ten 26",
      loai: 17,
      tacGia: "tacGia 26",
      gia: 92,
      id: "26",
    },
  ];
  const [books, setBooks] = useState(listDefaultBook);
  const [form, setForm] = useState({
    ten: "",
    loai: "",
    tacGia: "",
    gia: "",
  });
  const [isUpdate, setIsUpdate] = useState(true); // Kiem tra xem la Update hay la Add
  // true => Add
  // false => Update
  const deleteBook = (id) => {
    const copy = [...books];
    copy.splice(
      copy.findIndex((b) => b.id === id),
      1
    );
    setBooks(copy);
  };
  // Dùng để cập nhật giá trị input khi người dùng nhập, và cập nhật đúng trường (field) đó trong object form.
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const [id, setId] = useState(20); // vì dữ liệu mẫu có tới id 20
  const [idUpdate, setIdUpdate] = useState(null); // luu id can update

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isUpdate) {
      // Update data
      // B1: Lay gia tri cua doi tuong update
      const updateBook = {
        ...form,
        id: idUpdate, // id cu can update
        gia: Number(form.gia),
      };
      const booksUpdate = books.map((b) =>
        b.id === idUpdate ? updateBook : b
      );
      setBooks(booksUpdate);
      // reset data
      setIdUpdate(null);
      setIsUpdate(true);
    } else {
      // Add
      setBooks([
        ...books,
        {
          ...form,
          id: id,
          gia: Number(form.gia),
          // loai: Number(form.loai),
          // id: id,
        },
      ]);
      setId(id + 1);
    }
    // Sau khi add & Update deu reset lai form
    setForm({
      ten: "",
      loai: "",
      tacGia: "",
      gia: "",
    });
  };
  const handeleDetail = (book) => {
    setForm(book);
    setIsUpdate(false);
    setIdUpdate(book.id); // Lay ID cua doi tuong click
  };
  const handleReset = () => {
    setIsUpdate(true);
    setIdUpdate(null);
    setForm({
      ten: "",
      loai: "",
      tacGia: "",
      gia: "",
    });
  };
  return (
    <>
      <BookFormComponent
        form={form}
        editingId={isUpdate}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        resetData={handleReset}
      />

      <h1>Day la trang sach</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>ID</th>
            <th>Tên</th>
            <th>Loại</th>
            <th>Tác giả</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {books.map((p, index) => (
            <tr key={p.id}>
              <td>{index}</td>
              <td>{p.id}</td>
              <td>{p.ten}</td>
              <td>{p.loai}</td>
              <td>{p.tacGia}</td>
              <td>{p.gia}</td>
              <td>
                <button onClick={() => handeleDetail(p)}>Detail</button>
                <button onClick={() => deleteBook(p.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
