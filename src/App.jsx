import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ClassSelect from "./pages/ClassSelect";
import Attendance from "./pages/Attendance";
import Report from "./pages/Report";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/class" element={<ClassSelect />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </BrowserRouter>
  );
}