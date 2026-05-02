import { useState } from "react";
import axios from "axios";

const API = "http://localhost:5000/api";

function App() {
  const [token, setToken] = useState("");
  const [tasks, setTasks] = useState([]);

  const login = async () => {
    const res = await axios.post(`${API}/auth/login`, {
      email: "admin@gmail.com",
      password: "123456"
    });
    setToken(res.data.token);
  };

  const getTasks = async () => {
    const res = await axios.get(`${API}/tasks`, {
      headers: { authorization: token }
    });
    setTasks(res.data);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Team Task Manager</h2>

      <button onClick={login}>Login</button>
      <button onClick={getTasks}>Get Tasks</button>

      <ul>
        {tasks.map(t => (
          <li key={t._id}>
            {t.title} - {t.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;