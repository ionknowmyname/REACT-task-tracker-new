import { useState, useEffect } from "react"  
// useState; hook from react to enable states in functional components
// useEffect; hook to make something happen when the page loads
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from "./components/Header"
import Footer from "./components/Footer"
import Tasks from "./components/Tasks"
import AddTask from "./components/AddTask"
import About from "./components/About"

function App() {
    // putting state in App level so other components can use it
    const[showAddTask, setShowAddTask] = useState(false)  // boolean

    const [tasks, setTasks] =  useState([]) // [ name of state, function to update state]

    useEffect(() => {
        const getTasks  = async () => {
            const tasksFromServer = await fetchTasks()
            setTasks(tasksFromServer)
        }
        
        getTasks()
    }, [])

    // fetch tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()

        return data
        //console.log(data)
    }

    // fetch  single task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()

        return data
        //console.log(data) 
    }




    // Add Task
    const addTask = async (task) => {
        // adding to backend server
        const res = await fetch('http://localhost:5000/tasks', { 
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(task) 
        })

        const data = await res.json()
        setTasks([...tasks, data])


        /*    // adding to frontend
        // console.log(task)    // data submitted
        const id = Math.floor(Math.random() * 10000) + 1   // random number btw  1-10,001
        // console.log(id)

        const newTask = { id, ...task }   // ...task means copy all information in the task in function argument
        setTasks([...tasks, newTask])   // keep previous tasks and add newTask to the array
        */
    }

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })  // deletes from the server

        setTasks(tasks.filter((task) => task.id !== id))  // filters on the frontend
    }

    // Toggle Reminder
    const toggleReminder = async (id) => {
        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
        const res = await fetch(`http://localhost:5000/tasks/${id}`, { 
            method: 'PUT',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(updTask) 
        })
        const data = await res.json()

        setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: data.reminder} : task)) 

       /*   // for front end
       setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task)) 
       */
        // { ...task, reminder: !task.reminder}  means keep all task properties the same, bt change/set the reminder to the opposite
    }


    return (
        <Router>
            <div className="container">
                <Header title="'Task Tracker'" onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
                {/* set setShowAddTask to the opposite of what showAddTask currently is; so set to true if false and vice versa */}

                
                <Route path='/' exact render={(props) => (
                    <>
                        {showAddTask && <AddTask onAdd={addTask} />}  
                        {/* if showAddTask is true, show the component; && is short form of doing a ternary with no else */}

                        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to Show'}
                    </>
                )} />
                <Route path='/about' component={About} />
                <Footer />
            </div>
        </Router>
    );
}

export default App;
