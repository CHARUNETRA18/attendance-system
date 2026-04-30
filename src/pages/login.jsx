
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="fancy-title">Attendance System</h1>

        <input placeholder="Username" className="select" /><br /><br />
        <input placeholder="Password" type="password" className="select" /><br /><br />

        <button className="button" onClick={() => navigate("/class")}>
          Login
        </button>
      </div>
    </div>
  );
}