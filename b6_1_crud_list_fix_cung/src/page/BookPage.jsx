import { useState } from "react";
import BookFormComponent from "../component/BookFormComponent";

export default function BookPage() {
  const listDefaultBook = [
    {
      ten: "ten 1",
      loai: 2,
      tacGia: "tacGia 1",
      gia: 19,
      id: "1",
    },
    {
      ten: "ten 2",
      loai: 8,
      tacGia: "tacGia 2",
      gia: 19,
      id: "2",
    },
    {
      ten: "ten 3",
      loai: 80,
      tacGia: "tacGia 3",
      gia: 17,
      id: "3",
    },
    {
      ten: "ten 4",
      loai: 42,
      tacGia: "tacGia 4",
      gia: 92,
      id: "4",
    },
    {
      ten: "ten 5",
      loai: 8,
      tacGia: "tacGia 5",
      gia: 49,
      id: "5",
    },
    {
      ten: "ten 6",
      loai: 56,
      tacGia: "tacGia 6",
      gia: 54,
      id: "6",
    },
    {
      ten: "ten 7",
      loai: 76,
      tacGia: "tacGia 7",
      gia: 25,
      id: "7",
    },
    {
      ten: "ten 8",
      loai: 97,
      tacGia: "tacGia 8",
      gia: 81,
      id: "8",
    },
    {
      ten: "ten 9",
      loai: 30,
      tacGia: "tacGia 9",
      gia: 47,
      id: "9",
    },
    {
      ten: "ten 10",
      loai: 13,
      tacGia: "tacGia 10",
      gia: 61,
      id: "10",
    },
    {
      ten: "ten 11",
      loai: 7,
      tacGia: "tacGia 11",
      gia: 3,
      id: "11",
    },
    {
      ten: "ten 12",
      loai: 4,
      tacGia: "tacGia 12",
      gia: 36,
      id: "12",
    },
    {
      ten: "ten 13",
      loai: 81,
      tacGia: "tacGia 13",
      gia: 66,
      id: "13",
    },
    {
      ten: "ten 14",
      loai: 85,
      tacGia: "tacGia 14",
      gia: 2,
      id: "14",
    },
    {
      ten: "ten 15",
      loai: 84,
      tacGia: "tacGia 15",
      gia: 31,
      id: "15",
    },
    {
      ten: "ten 16",
      loai: 9,
      tacGia: "tacGia 16",
      gia: 36,
      id: "16",
    },
    {
      ten: "ten 17",
      loai: 23,
      tacGia: "tacGia 17",
      gia: 84,
      id: "17",
    },
    {
      ten: "ten 18",
      loai: 78,
      tacGia: "tacGia 18",
      gia: 53,
      id: "18",
    },
    {
      ten: "ten 19",
      loai: 7,
      tacGia: "tacGia 19",
      gia: 35,
      id: "19",
    },
    {
      ten: "ten 20",
      loai: 43,
      tacGia: "tacGia 20",
      gia: 71,
      id: "20",
    },
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
  return (
    <>
      <BookFormComponent />
      <h1>Day la trang sach</h1>
      <table>
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
                <button>Edit</button>
                <button>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
