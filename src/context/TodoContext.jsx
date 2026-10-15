import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const TodoContext = createContext(null);

const STORAGE_KEY = 'todo-react-avancado:tasks';

let nextId = Date.now();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useLocalStorage(STORAGE_KEY, []);
  const [filter, setFilter] = useState('all');

  const addTodo = useCallback(
    (text) => {
      const trimmed = text.trim();
      if (!trimmed) return;
      setTodos((prev) => [...prev, { id: nextId++, text: trimmed, done: false }]);
    },
    [setTodos],
  );

  const toggleTodo = useCallback(
    (id) => {
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
      );
    },
    [setTodos],
  );

  const removeTodo = useCallback(
    (id) => {
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    },
    [setTodos],
  );

  const value = useMemo(
    () => ({ todos, filter, setFilter, addTodo, toggleTodo, removeTodo }),
    [todos, filter, addTodo, toggleTodo, removeTodo],
  );

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
}

export function useTodos() {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error('useTodos deve ser usado dentro de um TodoProvider');
  }
  return context;
}
