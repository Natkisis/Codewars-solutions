import './App.css';
import { useState } from 'react';

export default function MiniTodo() {
 const [todos, setTodos] = useState([
  {id: crypto.randomUUID(), text: 'Bue bread'},
  {id: crypto.randomUUID(), text: 'Call my mom'},
 ]);
 const [newTodo, setNewTodo] = useState('');

 const removeTodo = (id) => {
  setTodos(todo => id !== todo.id);
 }

 const addNewTodo = (e) => {
  const text = e.target.value;
  if(!text.trim()) return;
  setTodos([...todos, {
    id: crypto.randomUUID(), text
  }])
  setNewTodo('');
 }

 return(
  <div>
    <h1>Todo list</h1>
    <ol>{todos.map(todo => (
      <li key={todo.id}>{todo.text} 
      <button onClick={() => removeTodo(todo.id)}>X</button>
      </li>
    ))}</ol>
    <input type="text" value={newTodo} onChange={() => addNewTodo(e)}/>
    <button onClick={() => setNewTodo(value)}>Add new todo</button>
  </div>
 )




}