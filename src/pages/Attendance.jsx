
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

export default function Attendance() {
  const location = useLocation();
  const navigate = useNavigate();

  const className = location.state?.className || "Class A";

  const [students, setStudents] = useState([
    { id: 1, name: "Arun", present: true },
    { id: 2, name: "Ravi", present: false },
    { id: 3, name: "Sneha", present: true },
  ]);

  const toggle = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  return (
    <div className="container">
      <h2 className="fancy-title">{className} Attendance</h2>

      {students.map((s) => (
        <div className="student" key={s.id}>
          {s.name}
          <button
            className={`button ${s.present ? "present" : "absent"}`}
            onClick={() => toggle(s.id)}
          >
            {s.present ? "Present" : "Absent"}
          </button>
        </div>
      ))}

      <br />
      <button
        className="button"
        onClick={() =>
          navigate("/report", { state: { students, className } })
        }
      >
        View Report
      </button>

      <br /><br />
      <button className="button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}