import { Link } from "react-router-dom";
export default function HeaderComponent() {
  return (
    <>
      <h1>Day la header</h1>
      {/* Duong dan => liet ke theo yeu cau cua de bai  */}
      <nav>
        <ul>
          <li>
            <Link to="/"> Home </Link>
          </li>
          <li>
            <Link to="/about"> About </Link>
          </li>
          <li>
            <Link to="/profile/456"> Profile </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
