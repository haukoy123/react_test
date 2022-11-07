import React, { useState } from "react";
import "./demo.css";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { nanoid } from "nanoid";

function Demo(props) {
    const [tasks, setTasks] = useState(props.tasks);
    const taskList = tasks.map((task) => (
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
                return {...task, name: newName};
            }
            return task;
        });
        setTasks(editTaskList)
    }

    function deleteTask(id) {
        const remainingTasks = tasks.filter((task) => id !== task.id);
        setTasks(remainingTasks)
    }

    function toggleTaskCompleted(id) {
        const updateTasks = tasks.map((task) => {
            if (id === task.id) {
                return {...task, completed: !task.completed};
            }
            return task;
        });

        setTasks(updateTasks)
    }

    
    function addTask(name) {
        const newTask = { id: `todo-${nanoid()}`, name, completed: false}
        setTasks([...tasks, newTask])
    }

    return (
        <div className="todoapp stack-large">
            <h1>TodoMatic</h1>
            <Form addTask={addTask} />
            <div className="filters btn-group stack-exception">
                <FilterButton name='all' />
                <FilterButton name='active' />
                <FilterButton name='completed' />
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
    );
}

export default Demo;
