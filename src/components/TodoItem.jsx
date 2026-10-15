import { memo } from 'react';

// memo: só re-renderiza quando a própria tarefa ou os callbacks mudam.
function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={`todo-item${todo.done ? ' todo-item--done' : ''}`}>
      <label className="todo-item__label">
        <input
          type="checkbox"
          checked={todo.done}
          onChange={() => onToggle(todo.id)}
        />
        <span>{todo.text}</span>
      </label>
      <button
        type="button"
        className="btn btn--danger"
        onClick={() => onRemove(todo.id)}
        aria-label={`Remover ${todo.text}`}
      >
        Remover
      </button>
    </li>
  );
}

export default memo(TodoItem);
