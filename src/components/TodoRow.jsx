import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteTodoList, updateTodoList } from './Reducer/TodoListReducer';
import { NavLink } from 'react-router-dom';

function TodoRow({task}) {

    const dispatch = useDispatch();

    const handleStatusChange = (e) => {
      const updatedTask = {
        ...task,
        status: e.target.value,
      };
      dispatch(updateTodoList(updatedTask));
    };
  
    const deleteHandler = (id) => {
      dispatch(deleteTodoList({id: id}))
  }
  return (
    <tr>
     
      <td>{task.date}</td>
      <td>{task.title}</td>
      <td>{task.description}</td>
      <td>
        <select className="form-select" value={task.status} onChange={handleStatusChange} >
          <option value="To do" style={{color: "red"}}>To do</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed" selected>Completed</option>
          <option value="Testing">Testing</option>
        </select>
      </td>
        <td>
            <NavLink to={`/update/${task.id}`} className='btn btn-sm'><i class="bi bi-pencil-square"></i></NavLink>
            <button onClick={() => deleteHandler(task.id)} className='btn btn-sm ms-2'><i class="bi bi-trash"></i></button>
        </td>
    </tr>
  )
}

export default TodoRow
