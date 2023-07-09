import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import TodoRow from './TodoRow';


function TodoList() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.tasks) || [];
  
    useEffect(() => {
      // Retrieve tasks from local storage
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        dispatch({ type: 'SET_TASKS', payload: JSON.parse(storedTasks) });
      }
    }, [dispatch]);
  
    useEffect(() => {
      // Save tasks to local storage whenever it changes
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    
    return (
            <div className="container bg-dark m-auto mt-4 p-3">
            <div className="row bg-light p-3" style={{ borderRadius: '20px' }}>
                <div className="col-md-12">
                <div className="d-flex justify-content-between">
                    <h4 className="text-decoration-underline">Todo List</h4>
                    <div className="d-flex gap-4">
                    <NavLink to={'/create'} className="btn btn-primary ">Add New Todo Item
                    </NavLink>
                    </div>
                </div>
                <hr />
                <table className="table">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {tasks.map((task) => (
                        <TodoRow key={task.id} task={task} />
                    ))}
                    </tbody>
                </table>
                </div>
            </div>
            </div>
  )
}

export default TodoList
