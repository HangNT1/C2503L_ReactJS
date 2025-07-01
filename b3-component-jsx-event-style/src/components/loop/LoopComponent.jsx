export default function LoopComponent() {
  // tao 1 ds doi tuong Product gom cac thuoc tinh:
  // ID - number, name - String, price - number.
  // Hien thi danh sach San Pham duoi dang sau:
  // 1. Hien thi duoi dang ul, li
  // 2. Hien thi danh sach duoi dang table
  // 3. Hien thi danh sach duoi dang combobox
  // C1: tao thuan chay : 1 mang Object
  const listProduct = [
    {
      id: 1,
      name: "San pham 1",
      price: 100,
    },
    {
      id: 2,
      name: "San pham 4",
      price: 102,
    },
    {
      id: 3,
      name: "San pham 2",
      price: 105,
    },
    {
      id: 4,
      name: "San pham 5",
      price: 100,
    },
  ];
  const listProduct1 = [
    {
      name: "name 1",
      price: 54,
      id: "1",
    },
    {
      name: "name 2",
      price: 81,
      id: "2",
    },
    {
      name: "name 3",
      price: 61,
      id: "3",
    },
    {
      name: "name 4",
      price: 9,
      id: "4",
    },
    {
      name: "name 5",
      price: 84,
      id: "5",
    },
    {
      name: "name 6",
      price: 49,
      id: "6",
    },
    {
      name: "name 7",
      price: 34,
      id: "7",
    },
    {
      name: "name 8",
      price: 22,
      id: "8",
    },
    {
      name: "name 9",
      price: 21,
      id: "9",
    },
    {
      name: "name 10",
      price: 73,
      id: "10",
    },
    {
      name: "name 11",
      price: 3,
      id: "11",
    },
    {
      name: "name 12",
      price: 74,
      id: "12",
    },
    {
      name: "name 13",
      price: 37,
      id: "13",
    },
    {
      name: "name 14",
      price: 59,
      id: "14",
    },
    {
      name: "name 15",
      price: 36,
      id: "15",
    },
    {
      name: "name 16",
      price: 14,
      id: "16",
    },
    {
      name: "name 17",
      price: 40,
      id: "17",
    },
    {
      name: "name 18",
      price: 31,
      id: "18",
    },
    {
      name: "name 19",
      price: 63,
      id: "19",
    },
    {
      name: "name 20",
      price: 83,
      id: "20",
    },
    {
      name: "name 21",
      price: 47,
      id: "21",
    },
    {
      name: "name 22",
      price: 33,
      id: "22",
    },
    {
      name: "name 23",
      price: 71,
      id: "23",
    },
    {
      name: "name 24",
      price: 95,
      id: "24",
    },
    {
      name: "name 25",
      price: 2,
      id: "25",
    },
    {
      name: "name 26",
      price: 52,
      id: "26",
    },
    {
      name: "name 27",
      price: 29,
      id: "27",
    },
    {
      name: "name 28",
      price: 2,
      id: "28",
    },
    {
      name: "name 29",
      price: 39,
      id: "29",
    },
    {
      name: "name 30",
      price: 94,
      id: "30",
    },
    {
      name: "name 31",
      price: 94,
      id: "31",
    },
    {
      name: "name 32",
      price: 35,
      id: "32",
    },
    {
      name: "name 33",
      price: 6,
      id: "33",
    },
    {
      name: "name 34",
      price: 42,
      id: "34",
    },
    {
      name: "name 35",
      price: 72,
      id: "35",
    },
    {
      name: "name 36",
      price: 77,
      id: "36",
    },
    {
      name: "name 37",
      price: 52,
      id: "37",
    },
    {
      name: "name 38",
      price: 21,
      id: "38",
    },
    {
      name: "name 39",
      price: 99,
      id: "39",
    },
    {
      name: "name 40",
      price: 60,
      id: "40",
    },
    {
      name: "name 41",
      price: 1,
      id: "41",
    },
    {
      name: "name 42",
      price: 29,
      id: "42",
    },
    {
      name: "name 43",
      price: 28,
      id: "43",
    },
    {
      name: "name 44",
      price: 53,
      id: "44",
    },
    {
      name: "name 45",
      price: 24,
      id: "45",
    },
    {
      name: "name 46",
      price: 100,
      id: "46",
    },
    {
      name: "name 47",
      price: 77,
      id: "47",
    },
    {
      name: "name 48",
      price: 93,
      id: "48",
    },
    {
      name: "name 49",
      price: 35,
      id: "49",
    },
    {
      name: "name 50",
      price: 93,
      id: "50",
    },
    {
      name: "name 51",
      price: 47,
      id: "51",
    },
    {
      name: "name 52",
      price: 4,
      id: "52",
    },
    {
      name: "name 53",
      price: 10,
      id: "53",
    },
    {
      name: "name 54",
      price: 5,
      id: "54",
    },
    {
      name: "name 55",
      price: 70,
      id: "55",
    },
    {
      name: "name 56",
      price: 26,
      id: "56",
    },
    {
      name: "name 57",
      price: 63,
      id: "57",
    },
    {
      name: "name 58",
      price: 49,
      id: "58",
    },
  ];
  // C2: Su dung mockio
  return (
    <>
      <h1>Loop</h1>
      {/* 1. Hien thi duoi dang ul li */}
      <h1>Ds duoi dang ul li </h1>
      <ul>
        {listProduct.map((product) => (
          <li key={product.id}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
      <h1>Ds duoi dang table</h1>
      <table border={1}>
        <thead>
          <tr>
            <th> Id</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {listProduct.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Ds duoi dang cbb</h1>
      <select>
        {listProduct.map((p) => (
          <option value={p.id} key={p.id}>
            {p.name} - {p.price}
          </option>
        ))}
      </select>
    </>
  );
}
// export default LoopComponent;
