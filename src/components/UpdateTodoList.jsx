import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateTodoList } from './Reducer/TodoListReducer';

function UpdateTodoList() {

    const {id} = useParams();
    const tasks = useSelector((state) => state.tasks);
    const existingTask = tasks.filter(f => f.id == id);
    const {title, date, description} = existingTask[0];

    const [updateTitle,setUpdateTitle] = useState(title);
    const [updateDate,setUpdateDate] = useState(date);
    const [updateDesc,setUpdateDesc] = useState(description);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
        e.preventDefault();
        dispatch(updateTodoList({
            id: id,
            title: updateTitle,
            date: updateDate,
            description: updateDesc
        }))
        navigate('/')
    }
  return (
    <div className="container bg-dark m-5 p-3" style={{height:"400px"}}>

    <form onSubmit={handleUpdate} className='bg-light p-3' style={{height:"370px", borderRadius:"20px"}}>
      <h4 className='text-decoration-underline'>Update Task</h4><hr />
      <div className="row px-3 d-flex justify-content-between">
        <div className="col-md-6">
          <label htmlFor="title" className='text-primary-emphasis fw-semibold'>Title</label>
          <input type="text" name='title' id='title' className="form-control border border-primary" value={updateTitle} onChange={e => setUpdateTitle(e.target.value)}/>
        </div>
        <div className="col-md-6">
          <label htmlFor="date" className='text-primary-emphasis fw-semibold'>Date</label>
          <input type="date" name='date' id='date' className="form-control border border-primary" value={updateDate} onChange={e => setUpdateDate(e.target.value)}/>
        </div>
      </div>
      <div className="row px-3 mt-3">
        <div className="col-md-12">
          <label htmlFor="desc">Description</label>
          <textarea type="text" className="form-control border border-primary" rows={3} value={updateDesc} onChange={e => setUpdateDesc(e.target.value)}></textarea>
        </div>
      </div>
        <div className="row px-3 mt-3">
          <div className="col-md-12">
            <button type="submit" className="btn btn-primary rounded-5 px-4">Update Todo Item</button>
          </div>
        </div>
            
    
    </form>
  </div>
  )
}

export default UpdateTodoList
