import { useState } from "react";

function Tasks() {

    const [task, setTask] = useState("");

    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: "Complete React Assignment",
            completed: false
        },
        {
            id: 2,
            name: "Study Database Management",
            completed: false
        },
        {
            id: 3,
            name: "Prepare for Exam",
            completed: true
        }
    ]);


    const addTask = () => {

        if (task.trim() === "") {
            return;
        }

        const newTask = {
            id: Date.now(),
            name: task,
            completed: false
        };

        setTasks([...tasks, newTask]);

        setTask("");
    };


    const deleteTask = (id) => {

        setTasks(
            tasks.filter((item) => item.id !== id)
        );

    };


    const completeTask = (id) => {

        setTasks(
            tasks.map((item) =>
                item.id === id
                    ? {
                        ...item,
                        completed: !item.completed
                    }
                    : item
            )
        );

    };


    const pending = tasks.filter(
        (task) => !task.completed
    ).length;


    const completed = tasks.filter(
        (task) => task.completed
    ).length;


    return (

        <div className="page">

            <h1>📝 Tasks</h1>

            <p>Manage your academic tasks.</p>


            {/* TASK COUNTS */}

            <div className="task-stats">

                <div>
                    <strong>{tasks.length}</strong>
                    <span>Total</span>
                </div>

                <div>
                    <strong>{pending}</strong>
                    <span>Pending</span>
                </div>

                <div>
                    <strong>{completed}</strong>
                    <span>Completed</span>
                </div>

            </div>


            {/* ADD TASK */}

            <div className="task-input">

                <input
                    type="text"
                    placeholder="Enter a new task..."
                    value={task}
                    onChange={(e) =>
                        setTask(e.target.value)
                    }
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addTask();
                        }
                    }}
                />

                <button
                    onClick={addTask}
                >
                    + Add Task
                </button>

            </div>


            {/* TASK LIST */}

            <div className="task-list">

                {tasks.map((item) => (

                    <div
                        className={
                            item.completed
                                ? "task completed"
                                : "task"
                        }
                        key={item.id}
                    >

                        <input
                            type="checkbox"
                            checked={item.completed}
                            onChange={() =>
                                completeTask(item.id)
                            }
                        />

                        <span>
                            {item.name}
                        </span>

                        <button
                            className="delete-btn"
                            onClick={() =>
                                deleteTask(item.id)
                            }
                        >
                            🗑️
                        </button>

                    </div>

                ))}

            </div>

        </div>
    );
}

export default Tasks;