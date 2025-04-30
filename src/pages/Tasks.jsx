import React from "react";
import Task from "../components/Task";
import { Navigation } from "../components/Navigation";

const myTasks = [
  { id: 1, title: "Task 1", status: "Pending" },
  { id: 2, title: "Task 2", status: "Completed" },
  { id: 3, title: "Task 3", status: "Pending" },
  { id: 4, title: "Task 4", status: "Pending" },
  { id: 5, title: "Task 5", status: "Completed" },
  { id: 6, title: "Task 6", status: "Completed" },
  { id: 7, title: "Task 7", status: "Pending" },
  { id: 8, title: "Task 8", status: "Pending" },
  { id: 9, title: "Task 9", status: "Completed" },
];

const styles = {
  container: {
    display: "flex",
    gap: 20,
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btn: {
    padding: 15,
    color: "#fff",
    backgroundColor: "#000",
    minWidth: 120,
    borderRadius: 30,
    outline: "none",
    border: "none",
    cursor: "pointer",
  },
};

const Tasks = () => {
  const [status, setStatus] = React.useState(false);
  const [label, setLabel] = React.useState("Completed");

  React.useEffect(() => {
    if (status) {
      setLabel("Completed");
    } else {
      setLabel("Pending");
    }
  }, [status]);

  const handleToggle = () => setStatus((prevState) => !prevState);

  // /dashboard/home
  // /dashboard/students

  return (
    <>
      <Navigation />
      <main>
        <div style={styles.container}>
          {myTasks?.map((task) => (
            <Task
              key={task.title}
              title={task.title}
              status={task.status}
              id={task.id}
            />
          ))}
        </div>
        <h1>{label} tasks</h1>
        <button style={styles.btn} onClick={handleToggle}>
          {label}
        </button>
        <div style={styles.container}>
          {status ? (
            <>
              {myTasks
                ?.filter((task) => task.status === "Completed")
                .map((task) => (
                  <Task
                    key={task.title}
                    title={task.title}
                    status={task.status}
                    id={task.id}
                  />
                ))}
            </>
          ) : (
            <>
              {myTasks
                ?.filter((task) => task.status === "Pending")
                .map((task) => (
                  <Task
                    key={task.title}
                    title={task.title}
                    status={task.status}
                    id={task.id}
                  />
                ))}
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Tasks;
