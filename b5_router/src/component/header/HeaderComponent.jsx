import { Link } from "react-router-dom";
export default function HeaderComponent() {
  return (
    <>
      <h1>Header Component</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        {/* <Link to="/not-found">Not fould</Link> */}
      </nav>
    </>
  );
}
