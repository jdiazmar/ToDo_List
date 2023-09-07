import React, { useState } from 'react';
import ToDoForm from '../ToDoForm/ToDoForm';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const ToDoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addToDo = todo => {
        setTodos(...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false})
    }
    console.log(todos);

    return ( 
        <div>
            <ToDoForm addToDo={addToDo} />
        </div>
     );
}
 
export default ToDoWrapper;