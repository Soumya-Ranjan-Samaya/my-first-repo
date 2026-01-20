import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './todolist.css'

function TodoList() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  
  function addTodo() {
    const newTodo = todo.trim()
    if (newTodo === "") return

    if (todos.includes(newTodo)) {
      alert("This todo already exists!")
      return
    }

    setTodos([...todos, newTodo])
    setTodo("")
  }

  
  function deleteTodo(index) {
    const newTodos = todos.filter(function(item, i) {
      return i !== index
    })
    setTodos(newTodos)
  }

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 ">
        <h2 className="text-center mb-4 text-primary">My Todo List</h2>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter your todo" value={todo} onChange={function(e) { setTodo(e.target.value) }}/>
          <button className="btn btn-success" onClick={addTodo}> Add </button>
        </div>

        <ul className="list-group">
          {todos.map(function(item, index) {
            return (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {item}
                <button className="btn btn-danger btn-sm" onClick={function() { deleteTodo(index) }} > ❌ </button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default TodoList;
