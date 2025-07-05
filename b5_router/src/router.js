import { Route, Routes } from "react-router-dom";
import HomePage from "./page/HomePage";
import PropfilePage from "./page/ProfilePage";
import AboutPage from "./page/AboutPage";
import NotFoundPage from "./page/NotFoundPage";

// Liet ke cac duong dan va noi dung can den cua cac duong dan
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/about" element={<AboutPage />}></Route>
      <Route path="/profile" element={<PropfilePage />}></Route>
      {/* <Route path="/not-found" element={<NotFoundPage />}></Route> */}
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}
