
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function ClassSelect() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2 className="fancy-title">Select Class</h2>

      <select
        className="select"
        onChange={(e) =>
          navigate("/attendance", { state: { className: e.target.value } })
        }
      >
        <option value="">-- Choose Class --</option>
        <option value="Class A">Class A</option>
        <option value="Class B">Class B</option>
      </select>

      <br /><br />
      <button className="button" onClick={() => navigate("/")}>
        Logout
      </button>
    </div>
  );
}