import { useState } from "react";

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)   // default is false

    const onSubmit = (e) => {
        e.preventDefault()  // so it don't submit to a page 

        if (!text) {   // text here is the state
            alert('Please add a task')
            return
        }

        onAdd({ text, day, reminder })    // actually does the adding

        setText('')   // clearing out form fields
        setDay('')
        setReminder(false)  // default is false coz its boolean
    }

    return (
        <form className='add-form' onSubmit={onSubmit}> {/* not calling onAdd directly coz we have to check things */}
            <div className='form-control'>
                <label>Task</label>
                <input type="text" placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)} />
            </div>    
            <div className='form-control'>
                <label>Day & Time</label>
                <input type="text" placeholder=' Add Day & Time' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>  
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                {/* (e.currentTarget.checked) returns true/false value if checked or not */}
            </div>   

            <input type="submit" value='Save Task' className='btn btn-block' />       
        </form>
    )
}

export default AddTask
