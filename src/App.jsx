import { useMemo } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoFilters from './components/TodoFilters.jsx';
import TodoList from './components/TodoList.jsx';
import { useTodos } from './context/TodoContext.jsx';

export default function App() {
  const { todos } = useTodos();

  const remaining = useMemo(() => todos.filter((todo) => !todo.done).length, [todos]);

  return (
    <main className="app">
      <header className="app__header">
        <h1>Minhas tarefas</h1>
        <p className="app__counter">
          {remaining} {remaining === 1 ? 'pendente' : 'pendentes'} de {todos.length}
        </p>
      </header>

      <TodoForm />
      <TodoFilters />
      <TodoList />
    </main>
  );
}
