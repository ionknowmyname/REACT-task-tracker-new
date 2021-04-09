import { useState } from "react";  // hook from react to enable states in functional components

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
    // putting state in App level so other components can use it
    const[showAddTask, setShowAddTask] = useState(false)  // boolean

    const [tasks, setTasks] =  useState([  // [ name of state, function to update state]
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 7 at 1:30pm',
            reminder: true,
        },
        {
            id: 2,
            text: 'Food Shopping',
            day: 'Feb 6 at 3:30pm',
            reminder: true,
        },
        {
            id: 3,
            text: 'Meet at school',
            day: 'Feb 5 at 2:30pm',
            reminder: false,
        },
    ])

    // Add Task
    const addTask = (task) => {
        // console.log(task)    // data submitted

        const id = Math.floor(Math.random() * 10000) + 1   // random number btw  1-10,001
        // console.log(id)

        const newTask = { id, ...task }   // ...task means copy all information in the task in function argument
        setTasks([...tasks, newTask])   // keep previous tasks and add newTask to the array
    }

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
        // { ...task, reminder: !task.reminder}  means keep all task properties the same, bt change/set the reminder to the opposite
    }


    return (
        <div className="container">
            <Header title="'Task Tracker'" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {/* set setShowAddTask to the opposite of what showAddTask currently is; so set to true if false and vice versa */}

            {showAddTask && <AddTask onAdd={addTask} />}  
            {/* if showAddTask is true, show the component; && is short form of doing a ternary with no else */}

            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
        </div>
    );
}

export default App;
