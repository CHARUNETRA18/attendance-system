import { useState } from "react";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedClass, setSelectedClass] = useState("");
  const [view, setView] = useState("login");

  const [students, setStudents] = useState([
    { id: 1, name: "John", present: true },
    { id: 2, name: "Ravi", present: false },
    { id: 3, name: "Asha", present: true },
    { id: 4, name: "Priya", present: false },
  ]);

  const toggle = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, present: !s.present } : s
      )
    );
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setView("class");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setView("login");
  };

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>School Attendance System</h1>

      {/* LOGIN PAGE */}
      {view === "login" && (
        <div>
          <h2>Login</h2>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}

      {/* CLASS SELECTION */}
      {view === "class" && (
        <div>
          <h2>Select Class</h2>
          <select
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option>Select</option>
            <option>Class A</option>
            <option>Class B</option>
          </select>

          <br /><br />

          <button onClick={() => setView("attendance")}>
            Continue
          </button>

          <br /><br />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {/* ATTENDANCE PAGE */}
      {view === "attendance" && (
        <div>
          <h2>{selectedClass} Attendance</h2>

          {students.map((s) => (
            <div key={s.id} style={{ margin: "10px 0" }}>
              {s.name}
              <button
                onClick={() => toggle(s.id)}
                style={{
                  marginLeft: "10px",
                  background: s.present ? "green" : "red",
                  color: "white",
                  border: "none",
                  padding: "5px 10px",
                  cursor: "pointer",
                }}
              >
                {s.present ? "Present" : "Absent"}
              </button>
            </div>
          ))}

          <br />
          <button onClick={() => setView("report")}>
            View Report
          </button>
        </div>
      )}

      {/* REPORT PAGE */}
      {view === "report" && (
        <div>
          <h2>Report</h2>
          <p>Total Students: {students.length}</p>
          <p>Present: {presentCount}</p>
          <p>Absent: {absentCount}</p>

          <br />
          <button onClick={() => setView("attendance")}>
            Back
          </button>
        </div>
      )}
    </div>
  );
}