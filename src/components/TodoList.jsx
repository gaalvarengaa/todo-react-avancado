import { useMemo } from 'react';
import { useTodos } from '../context/TodoContext.jsx';
import TodoItem from './TodoItem.jsx';

const FILTERS = {
  all: () => true,
  done: (todo) => todo.done,
  pending: (todo) => !todo.done,
};

export default function TodoList() {
  const { todos, filter, toggleTodo, removeTodo } = useTodos();

  // Recalcula a lista filtrada apenas quando tarefas ou filtro mudam.
  const visibleTodos = useMemo(() => todos.filter(FILTERS[filter]), [todos, filter]);

  if (visibleTodos.length === 0) {
    return <p className="todo-empty">Nenhuma tarefa aqui.</p>;
  }

  return (
    <ul className="todo-list">
      {visibleTodos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onRemove={removeTodo} />
      ))}
    </ul>
  );
}
