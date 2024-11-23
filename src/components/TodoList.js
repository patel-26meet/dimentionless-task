import React, { useState } from "react";

function TodoList({ todos, onEditTodo, onDeleteTodo, onDeleteAll }) {
  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
  };

  const saveEdit = (id) => {
    if (!editTitle.trim()) return;
    onEditTodo(id, { title: editTitle });
    setEditId(null);
    setEditTitle("");
  };

  return (
    <div className="todo-list">
      {todos.length === 0 ? (
        <p>No tasks yet!</p>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="todo-item">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
                <button onClick={() => saveEdit(todo.id)}>Save</button>
                <button onClick={() => setEditId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{todo.title}</span>
                <button onClick={() => handleEdit(todo)}>Edit</button>
                <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
              </>
            )}
          </div>
        ))
      )}
      {todos.length > 0 && (
        <button className="delete-all" onClick={onDeleteAll}>
          Delete All
        </button>
      )}
    </div>
  );
}

export default TodoList;
