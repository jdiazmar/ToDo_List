import React, { useState } from 'react';

const ToDoForm = () => {

    const [task, setTask] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        let newTask = {
            task: task
        };
        console.log(newTask);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <div>
            <input type='text' placeholder='Create Task' onChange={(event) => setTask(event.target.value)} />
            <button type='submit'>Add</button>
            </div>
        </form>
     );
}
 
export default ToDoForm;