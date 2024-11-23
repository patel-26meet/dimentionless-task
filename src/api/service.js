let dummyTodos = [
    { id: 1, title: "Buy a new gaming laptop" },
    { id: 2, title: "Complete a previous task" },
    { id: 3, title: "Create a portfolio site" },
  ];
  
  export const getTodos = async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve([...dummyTodos]), 500);
    });
  };
  
  export const createTodo = async (todo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newTodo = { ...todo, id: Date.now() };
        dummyTodos.push(newTodo);
        resolve(newTodo);
      }, 500);
    });
  };
  
  export const updateTodo = async (id, updatedTodo) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dummyTodos = dummyTodos.map((todo) =>
          todo.id === id ? { ...todo, ...updatedTodo } : todo
        );
        resolve({ id, ...updatedTodo });
      }, 500);
    });
  };
  
  export const deleteTodo = async (id) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dummyTodos = dummyTodos.filter((todo) => todo.id !== id);
        resolve();
      }, 500);
    });
  };
  
  export const deleteAllTodos = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        dummyTodos = [];
        resolve();
      }, 500);
    });
  };
  