import "./App.css";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import TeacherRoutes from "./components/TeacherRoutes/TeacherRoutes.js";
import StudentRoutes from "./components/StudentRoutes/StudentRoutes.js";
import Login from "./Pages/Login/Login.js";
import { me } from "./services/task3.service.js";

function App() {
  const token = localStorage.getItem("token");

  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const user = await me();
        setUser(user);
        console.log("user: ", user);
      } catch (e) {}
    };
    fetchMe();
  }, []);

  if (token && user.role === "admin") {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/teachers/*" element={<TeacherRoutes />} />
          </Routes>
        </Router>
      </div>
    );
  } else if (token && user.role === "user") {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/students/*" element={<StudentRoutes />} />
          </Routes>
        </Router>
      </div>
    );
  } else if (!token) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  } else {
    return <div>loading...</div>;
  }
}

export default App;
