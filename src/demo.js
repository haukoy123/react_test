import React, { useState } from "react";
import "./demo.css";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { nanoid } from "nanoid";
import { Outlet } from "react-router-dom";


const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

function Demo(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const [filter, setFilter] = useState("All");
    const filterList = FILTER_NAMES.map((name) => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));
    const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
        <Todo
            id={task.id}
            name={task.name}
            completed={task.completed}
            key={task.id}
            toggleTaskCompleted={toggleTaskCompleted}
            deleteTask={deleteTask}
            editTask={editTask}
        />
    ));
    const headingText = `${taskList.length} tasks remaining`;


    function editTask(id, newName) {
        const editTaskList = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editTaskList);
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks);
    }

    function toggleTaskCompleted(id) {
        const updateTasks = tasks.map((task) => {
            if (id === task.id) {
                return { ...task, completed: !task.completed };
            }
            return task;
        });
        setTasks(updateTasks);
    }

    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false };
        setTasks([...tasks, newTask]);
    }
    // eslint-disable-next-line
    return (
        <div style={{display: "flex"}}>
            <div className="todoapp stack-large mw-68rem">
                <h1>TodoMatic</h1>
                <Form addTask={addTask} />
                <div className="filters btn-group stack-exception">
                    {filterList}
                </div>
                <h2 id="list-heading">{headingText}</h2>
                <ul
                    role="list"
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {taskList}
                </ul>
            </div>
            <div className="m-auto">
                <Outlet />
            </div>
        </div>
        
    );
}

export default Demo;
