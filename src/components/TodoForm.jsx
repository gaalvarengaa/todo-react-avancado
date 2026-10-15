import { useInputValue } from '../hooks/useInputValue.js';
import { useTodos } from '../context/TodoContext.jsx';

export default function TodoForm() {
  const { addTodo } = useTodos();
  const { value, onChange, reset } = useInputValue('');

  function handleSubmit(event) {
    event.preventDefault();
    if (!value.trim()) return;
    addTodo(value);
    reset();
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-form__input"
        placeholder="O que precisa ser feito?"
        aria-label="Nova tarefa"
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="btn btn--primary">
        Adicionar
      </button>
    </form>
  );
}
