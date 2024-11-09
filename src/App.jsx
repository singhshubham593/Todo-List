import React, { useState, useEffect} from 'react'
import no from '../src/assets/no.png'

const getInitialToDos = () => JSON.parse(localStorage.getItem("todos")) || []; 
 
 const App = () => {
  const [todos, setTodos] = useState(getInitialToDos);
  const [input, setInput] = useState("");
  
  useEffect(() => { localStorage.setItem("todos", JSON.stringify(todos)); }, [todos]); 
  
  const addTodo = () => {
    if(input.trim()){
      setTodos([...todos, {id: Date.now(), text:input, completed:false}])
      setInput("")
    }
  }

   return (
    <div className="min-h-screen m flex items-center justify-center bg-gradient-to-l from-blue-600 to-emerald-400">
    <div className="bg-white  shadow-lg rounded-3xl md:p-16">
      <div className=" flex flex-row ">
      <img className="w-10 h-10" src={no} alt="" />
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-2 md:7 font-serif">Todo List</h1>
      </div>
      <div className="m-4 flex rounded">
        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a new todo" className="flex-grow px-3 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        <button onClick={addTodo} className="bg-blue-500 text-white px-4 py-2 rounded-r-full hover:bg-blue-800 flex-grow">Add</button>
      </div>
      <ul className="space-y-2">
        {
          todos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center p-3 rounded-lg bg-slate-100 border border-gray-200 rounded-full"
            >
            <input type="checkbox"
              checked={todo.completed}
              onChange={() => setTodos(
                todos.map((t) => (
                t.id == todo.id ? { ...t, completed: !t.completed } : t
              ))
            
              )}
              className="mr-2 h-5 w-5 text-blue-600"
            />
            <span className={ `flex-grow ${todo.completed ?  "line-through text-gray-500" : "text-gray-800"}`}>
              {todo.text}
            </span>
            <button
              onClick={() => setTodos(todos.filter((t) => t.id !== todo.id))}
              className="ml-2 border-none p-2 rounded-full bg-blue-500 text-white hover:bg-red-600"
            >
              Delete
            </button>
            </li>
          )
          )  
        }
      </ul>

    </div>
  </div>
  
   )
 }
 
 export default App
 