import React, { useState } from "react";
import { TodoProvider } from "../contexts/TodoContext";

function Todo() {
  const [todos, setTodos] = useState([]);

  const addTodo =(todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo},...prev])
  }

  const updatedTodo=(id, todo)=>{
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id === id ? todo :prevTodo)))

  }

  const deleteTodo =(id)=>{
    setTodos((prev)=>prev.filter((todo)=> todo.id !== id))
  }
  const toggleComplete=(id)=>{
    setTodos((prev)=> prev.map((prevTodo)=>))
  }


  return (
    <TodoProvider value={{todos,addTodo, updatedTodo, deleteTodo,toggleComplete}}>
      <div>
        <h1>Todo in local Storage</h1>
        <div>{/* input fuild */}</div>
        <div>{/* todos */}</div>
      </div>
    </TodoProvider>
  );
}

export default Todo;
