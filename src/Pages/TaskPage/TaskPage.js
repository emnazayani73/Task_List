import { useState } from "react";
import TaskForm from "../../components/taskForm/TaskForm";
import TaskList from "../../components/TaskList/TaskList";

function TaskPage() {
  const steps = ["step1", "step2"];
  const loading = false;
  //const taskList = ["task1", "task1", "task3"];
  const [tasks, setTasks] = useState([
    {
      _id: "1",
      title: "learn html",
      duration: "60",
    },
    {
      _id: "2",
      title: "learn JS",
      duration: "80",
    },
    {
      _id: "3",
      title: "learn React",
      duration: "60",
    },
  ]);
  /*function SayHello(value) {
    alert("hello" + value);
  }*/
  const [isVisible, setIsVisible] = useState(true);
  function handleVisibility(p) {
    setIsVisible(!isVisible);
  }
  function addTask(title, duration) {
    console.log("title", "duration:", title, duration);
    const newTask = {
      _id: tasks.length + 1 + "",
      title: title,
      duration: duration,
    };

    //const newTask={_id:tasks.length +"",title ,duration}
    //setTasks(tasks.concat(newTask)) c comme setTasks
    setTasks([...tasks, newTask]);
  }

  function deleteTask(id) {
    console.log("delete", id);
    setTasks(
      tasks.filter((t) => {
        return t._id !== id;
      })
    );
  }

  function updateTask(task) {
    console.log(task);
    setTasks(
      tasks.map((t) => {
        if (t._id === task._id) {
          t.title = task.title;
          t.duration = task.duration;
        }
        return t;
      })
    );

    // setTasks([
    //   ...tasks.slice(0, task._id - 1),
    //   task,
    //   ...tasks.slice(task._id - 1 + 1),
    // ]);
  }
  return (
    <div className="App">
      <ul>
        {steps.map((step, index) => {
          return <li key={index}>{step}</li>;
        })}
      </ul>
      {/*<button onclick="setIsVisible=(!isVisible)">toggle visibility</button> en javascript*/}
      {/*<button onClick={handleVisibility}>toggle visibility</button>*/}
      <button onClick={() => handleVisibility("hello")}>
        toggle visibility
      </button>

      <TaskForm addTask={addTask} /*SayHello={SayHello}*/ />
      {/*{loading ? (
        <div>loading...</div>
      ) : (
        <>
          <Task />
          <Task />
          <Task />
        </>
      )}*/}
      {loading && <div>loading..</div>}
      {!loading && isVisible && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
        /*<>
          <Task title="task1" duration={60} />
          <Task
            title="task2"
            duration={60}
            details={{ difficulty: 10, level: "level2" }}
          />
          <Task
            title="task3"
            duration={60}
            details={{ difficulty: 10, level: "level" }}
          />
        </>*/
      )}
    </div>
  );
}

export default TaskPage;
