import React from "react";
import Hello from "../hello/Hello";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "../menu/Menu";
function StudentRoutes() {
  return (
    <div>
      <Menu role="student" />
      <Routes>
        <Route path="" element={<Navigate to="hello" />} />
        <Route path="hello" element={<Hello />} />
      </Routes>
    </div>
  );
}

export default StudentRoutes;
