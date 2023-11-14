import React, { useState } from 'react';

const ToDoForm = ({addToDo}) => {

    const [task, setTask] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newTask = {
            task: task
        };
        addToDo(newTask);

        setTask('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
            <input type='text' value={task} placeholder='Create Task' onChange={(event) => setTask(event.target.value)} />
            <button type='submit'>Add</button>
            </div>
        </form>
     );
}
 
export default ToDoForm;