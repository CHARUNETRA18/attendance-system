import { useState } from "react";

export default function App() {
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

  return (
    <div style={{ padding: "20px" }}>
      <h1>Attendance System</h1>

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
    </div>
  );
}