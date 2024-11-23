import React, { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import * as todoService from "./api/service";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const data = await todoService.getTodos();
    setTodos(data);
  };

  const addTodo = async (todo) => {
    const newTodo = await todoService.createTodo(todo);
    setTodos([...todos, newTodo]);
  };

  const editTodo = async (id, updatedTodo) => {
    const editedTodo = await todoService.updateTodo(id, updatedTodo);
    setTodos(todos.map((todo) => (todo.id === id ? editedTodo : todo)));
  };

  const deleteTodo = async (id) => {
    await todoService.deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllTodos = async () => {
    await todoService.deleteAllTodos();
    setTodos([]);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm onAddTodo={addTodo} />
      <TodoList
        todos={todos}
        onEditTodo={editTodo}
        onDeleteTodo={deleteTodo}
        onDeleteAll={deleteAllTodos}
      />
    </div>
  );
}

export default App;
