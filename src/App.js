import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TodoList from './components/TodoList'
import CreateTodoList from './components/CreateTodoList'
import UpdateTodoList from './components/UpdateTodoList'

function App() {
  return (
    
    <BrowserRouter>
        <Routes>
              <Route path='/' element={<TodoList/>}/>
              <Route path='/create' element={<CreateTodoList/>} />
              <Route path='/update/:id' element={<UpdateTodoList/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default App

