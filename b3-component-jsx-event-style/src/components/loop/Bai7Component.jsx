import { useState } from "react";

export default function Bai5Component() {
  const allListSinhVien = [
    {
      name: "name 1",
      score: 3,
      id: "1",
    },
    {
      name: "name 2",
      score: 4,
      id: "2",
    },
    {
      name: "name 3",
      score: 7,
      id: "3",
    },
    {
      name: "name 4",
      score: 6,
      id: "4",
    },
    {
      name: "name 5",
      score: 4.6,
      id: "5",
    },
    {
      name: "name 6",
      score: 3.7,
      id: "6",
    },
    {
      name: "name 7",
      score: 10,
      id: "7",
    },
    {
      name: "name 8",
      score: 47,
      id: "8",
    },
    {
      name: "name 9",
      score: 92,
      id: "9",
    },
    {
      name: "name 10",
      score: 62,
      id: "10",
    },
    {
      name: "name 11",
      score: 9,
      id: "11",
    },
    {
      name: "name 12",
      score: 62,
      id: "12",
    },
    {
      name: "name 13",
      score: 53,
      id: "13",
    },
    {
      name: "name 14",
      score: 29,
      id: "14",
    },
    {
      name: "name 15",
      score: 84,
      id: "15",
    },
    {
      name: "name 16",
      score: 59,
      id: "16",
    },
    {
      name: "name 17",
      score: 84,
      id: "17",
    },
    {
      name: "name 18",
      score: 6,
      id: "18",
    },
    {
      name: "name 19",
      score: 12,
      id: "19",
    },
    {
      name: "name 20",
      score: 46,
      id: "20",
    },
    {
      name: "name 21",
      score: 84,
      id: "21",
    },
    {
      name: "name 22",
      score: 65,
      id: "22",
    },
    {
      name: "name 23",
      score: 67,
      id: "23",
    },
    {
      name: "name 24",
      score: 62,
      id: "24",
    },
    {
      name: "name 25",
      score: 33,
      id: "25",
    },
    {
      name: "name 26",
      score: 88,
      id: "26",
    },
    {
      name: "name 27",
      score: 25,
      id: "27",
    },
    {
      name: "name 28",
      score: 47,
      id: "28",
    },
    {
      name: "name 29",
      score: 89,
      id: "29",
    },
    {
      name: "name 30",
      score: 68,
      id: "30",
    },
    {
      name: "name 31",
      score: 94,
      id: "31",
    },
    {
      name: "name 32",
      score: 3,
      id: "32",
    },
    {
      name: "name 33",
      score: 57,
      id: "33",
    },
    {
      name: "name 34",
      score: 1,
      id: "34",
    },
    {
      name: "name 35",
      score: 7,
      id: "35",
    },
    {
      name: "name 36",
      score: 62,
      id: "36",
    },
    {
      name: "name 37",
      score: 74,
      id: "37",
    },
    {
      name: "name 38",
      score: 55,
      id: "38",
    },
    {
      name: "name 39",
      score: 53,
      id: "39",
    },
    {
      name: "name 40",
      score: 79,
      id: "40",
    },
    {
      name: "name 41",
      score: 22,
      id: "41",
    },
    {
      name: "name 42",
      score: 89,
      id: "42",
    },
    {
      name: "name 43",
      score: 54,
      id: "43",
    },
    {
      name: "name 44",
      score: 71,
      id: "44",
    },
    {
      name: "name 45",
      score: 89,
      id: "45",
    },
    {
      name: "name 46",
      score: 53,
      id: "46",
    },
    {
      name: "name 47",
      score: 42,
      id: "47",
    },
    {
      name: "name 48",
      score: 12,
      id: "48",
    },
    {
      name: "name 49",
      score: 73,
      id: "49",
    },
    {
      name: "name 50",
      score: 69,
      id: "50",
    },
    {
      name: "name 51",
      score: 52,
      id: "51",
    },
    {
      name: "name 52",
      score: 56,
      id: "52",
    },
    {
      name: "name 53",
      score: 69,
      id: "53",
    },
    {
      name: "name 54",
      score: 78,
      id: "54",
    },
    {
      name: "name 55",
      score: 17,
      id: "55",
    },
    {
      name: "name 56",
      score: 35,
      id: "56",
    },
    {
      name: "name 57",
      score: 5,
      id: "57",
    },
    {
      name: "name 58",
      score: 57,
      id: "58",
    },
  ];

  const [listSinhVien, setListSinhVien] = useState(allListSinhVien);

  const filterData = () => {
    const filterListSinhVien = allListSinhVien.filter((s) => s.score > 5);
    setListSinhVien(filterListSinhVien);
  };

  const resetData = () => {
    setListSinhVien(allListSinhVien);
  };

  return (
    <>
      <h1>Bai 7</h1>
      {/* khi bam vao button filter => ds hien thi nhung ban sv co diem > 5  */}
      <button onClick={filterData}>Filter</button>
      {/* Khi bam vao button reset => ds hien thi toan bo sv */}
      <button onClick={resetData}>Reset</button>
      <table border={1}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Ten</th>
            <th>Diem</th>
          </tr>
        </thead>
        <tbody>
          {listSinhVien.map((sv, index) => (
            <tr key={sv.id}>
              <td>{index + 1}</td>
              <td>{sv.name}</td>
              <td>{sv.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
