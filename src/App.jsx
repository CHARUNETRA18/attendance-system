import { useState } from "react";

export default function App() {
  const [view, setView] = useState("login");
  const [selectedClass, setSelectedClass] = useState("");

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

  const presentCount = students.filter((s) => s.present).length;
  const absentCount = students.length - presentCount;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Attendance System</h1>

        {/* LOGIN */}
        {view === "login" && (
          <>
            <h2>Login</h2>
            <button style={styles.button} onClick={() => setView("class")}>
              Login
            </button>
          </>
        )}

        {/* CLASS */}
        {view === "class" && (
          <>
            <h2>Select Class</h2>
            <select
              style={styles.input}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option>Select Class</option>
              <option>Class A</option>
              <option>Class B</option>
            </select>

            <button style={styles.button} onClick={() => setView("attendance")}>
              Continue
            </button>
          </>
        )}

        {/* ATTENDANCE */}
        {view === "attendance" && (
          <>
            <h2>{selectedClass} Attendance</h2>

            {students.map((s) => (
              <div key={s.id} style={styles.studentRow}>
                <span>{s.name}</span>
                <button
                  style={{
                    ...styles.toggleBtn,
                    backgroundColor: s.present ? "#22c55e" : "#ef4444",
                  }}
                  onClick={() => toggle(s.id)}
                >
                  {s.present ? "Present" : "Absent"}
                </button>
              </div>
            ))}

            <button style={styles.button} onClick={() => setView("report")}>
              View Report
            </button>
          </>
        )}

        {/* REPORT */}
        {view === "report" && (
          <>
            <h2>Report</h2>
            <p>Total: {students.length}</p>
            <p>Present: {presentCount}</p>
            <p>Absent: {absentCount}</p>

            <button style={styles.button} onClick={() => setView("attendance")}>
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#f3f4f6",
  },
  card: {
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "15px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  studentRow: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    padding: "8px",
    border: "1px solid #eee",
    borderRadius: "6px",
  },
  toggleBtn: {
    padding: "5px 10px",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};
