import { useState, useEffect } from "react";
import "./TaskForm.css";

function TaskForm(props) {
  //props.SayHello("learn node"); //la valeur "learn node est utilisé pour faire communiquer l'enfant "taskForm" et le parent "task page"

  const [title, setTitle] = useState("learn");
  const [duration, setDuration] = useState("0");

  function handleTitle(e) {
    setTitle(e.target.value);
  }
  function handleClick(e) {
    console.log("handle Click");
    props.addTask(title, duration);
  }

  useEffect(() => {
    document.title = title;
  });
  return (
    <div className="taskForm">
      <form action="" className="form">
        <input type="text" name="title" onChange={handleTitle} />
        <br />
        <input
          type="text"
          name="duration"
          onChange={(e) => setDuration(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>
          Add a task
        </button>
      </form>
    </div>
  );
}
export default TaskForm;
