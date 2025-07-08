import { Route, Routes } from "react-router-dom";
import HomePage from "../page/HomePage";
import AboutPage from "../page/AboutPage";
import ProfilePage from "../page/ProfilePage";
import NotFoundPage from "../page/NotFoundPage";
export default function AppRoutes() {
  return (
    <>
      {/* Chua noi dung thay doi phan giua cua 1 trang web */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/profile/:id1" element={<ProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}
