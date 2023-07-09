import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { addTodoList, updateTodoList } from './Reducer/TodoListReducer';

// Generate a unique ID
const uniqueId = uuidv4();
console.log(uniqueId); // Output: e.g., "d87a1730-6135-49f8-97b3-6f5c2eb8c0ae"

function CreateTodoList({task}) {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title,setTitle] = useState('');
  const [date,setDate] = useState("");
  const [description,setDescription] = useState("");
 
  const tasks = useSelector((state) => state.tasks);

  const existingUsersData = localStorage.getItem('usersData');
  const usersData = existingUsersData ? JSON.parse(existingUsersData) : [];
  
  const newUser = {
    id: uniqueId,
    title: '',
    date: '',
    description: '',
  };
  
  const updatedUsersData = [...usersData, newUser];
  
  localStorage.setItem('usersData', JSON.stringify(updatedUsersData));

  const handleStatusChange = (e) => {
    const updatedTask = {
      ...task,
      status: e.target.value,
    };
    dispatch(updateTodoList(updatedTask));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form data
    const formData = {
      title,
      date,
      description,
    };
    // console.log(formData)
    // // Store the form data in local storage
    localStorage.setItem('formData', JSON.stringify(formData));

    dispatch(addTodoList({id: tasks[tasks.length - 1].id + 1, title, date, description}))
    navigate("/")
  }
  return (
    <div className="container bg-dark m-5 p-3" style={{height:"400px"}}>

      <form onSubmit={handleSubmit} className='bg-light p-3' style={{height:"370px", borderRadius:"20px"}}>
        <h4 className='text-decoration-underline'>Add New Task</h4><hr />
        <div className="row px-3 d-flex justify-content-between">
          <div className="col-md-6">
            <label htmlFor="title" className='text-primary-emphasis fw-semibold'>Title</label>
            <input type="text" name='title' id='title' className="form-control border border-primary" value={title} onChange={e => setTitle(e.target.value)} required/>
          </div>
          <div className="col-md-6">
            <label htmlFor="date" className='text-primary-emphasis fw-semibold'>Date</label>
            <input type="date" name='date' id='date' className="form-control border border-primary" value={date} onChange={e => setDate(e.target.value)} required/>
          </div>
        </div>
        <div className="row px-3 mt-3">
          <div className="col-md-12">
            <label htmlFor="desc">Description</label>
            <textarea type="text" className="form-control border border-primary" rows={3} value={description} onChange={e => setDescription(e.target.value)} required></textarea>
          </div>
         
        </div>
          <div className="row px-3 mt-3">
            <div className="col-md-12">
              <button type="submit" className="btn btn-primary rounded-5 px-4">Add Todo Item</button>
            </div>
          </div>
              
      
      </form>
    </div>
  )
}

export default CreateTodoList
