// import React from 'react'
import Task from './Task'


const Tasks = ({ tasks, onDelete, onToggle }) => {   // or props, then props.tasks.map in the return block
    

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />  
                // using key prop coz each child in a map should have a unique id
            ))}  
        </>
    )
}

export default Tasks
