import { memo } from 'react';
import { useTodos } from '../context/TodoContext.jsx';

const OPTIONS = [
  { value: 'all', label: 'Todas' },
  { value: 'pending', label: 'Pendentes' },
  { value: 'done', label: 'Concluídas' },
];

function TodoFilters() {
  const { filter, setFilter } = useTodos();

  return (
    <div className="todo-filters" role="group" aria-label="Filtrar tarefas">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className={`btn btn--filter${filter === option.value ? ' is-active' : ''}`}
          aria-pressed={filter === option.value}
          onClick={() => setFilter(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export default memo(TodoFilters);
