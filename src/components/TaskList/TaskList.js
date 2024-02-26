import Task from "../task/Task";

function Tasks(props) {
  console.log(props.tasks);
  return (
    <div className="tasksList">
      {props.tasks.map((t) => {
        return (
          <Task
            key={t._id}
            _id={t._id}
            title={t.title}
            duration={t.duration}
            deleteTask={props.deleteTask}
            updateTask={props.updateTask}
          />
        );
      })}
    </div>
  );
}

export default Tasks;
