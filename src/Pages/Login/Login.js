import React from "react";
import { useState } from "react";
import { login } from "../../services/task3.service";
import { useNavigate } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    const token = await login({ email, password });
    console.log("token: ", token);
    localStorage.setItem("token", token);
    // navigate("/")
    window.location = "/";
  };

  return (
    <div>
      <div>
        Email
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        Password
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={handleClick}>Se connecter</button>
      </div>
    </div>
  );
}

export default Login;
