
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

export default function Report() {
  const location = useLocation();
  const navigate = useNavigate();

  const students = location.state?.students || [];
  const className = location.state?.className || "";

  const present = students.filter((s) => s.present).length;

  return (
    <div className="container">
      <h2 className="fancy-title">{className} Report</h2>

      <p>Total Students: {students.length}</p>
      <p>Present: {present}</p>
      <p>Absent: {students.length - present}</p>

      <br />
      <button className="button" onClick={() => navigate("/class")}>
        Back
      </button>

      <br /><br />
      <button className="button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}