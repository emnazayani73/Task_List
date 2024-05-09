import React from "react";
import TaskPage from "../../Pages/TaskPage/TaskPage";
import TaskDetails from "../../Pages/TaskDetails";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Menu from "../menu/Menu";

function TeacherRoutes() {
  return (
    <div>
      <Menu role="teacher" />

      <Routes>
        <Route path="" element={<Navigate to="tasks" />} />
        <Route path="tasks" element={<TaskPage />} />
        <Route path="tasks/:id" element={<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default TeacherRoutes;
