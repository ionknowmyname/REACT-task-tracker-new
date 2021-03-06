import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : 'reminderfalse'}`} onDoubleClick={() => onToggle(task.id)}>
            {/* if task.reminder is true, then add reminder className, if false, add reminderfalse className  */}
            <h3>{task.text} <FaTimes style={{ color:'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
