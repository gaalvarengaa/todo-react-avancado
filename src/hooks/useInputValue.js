import { useCallback, useState } from 'react';

// Controla o valor de um input de texto e expõe handlers prontos para uso.
export function useInputValue(initialValue = '') {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback((event) => setValue(event.target.value), []);
  const reset = useCallback(() => setValue(initialValue), [initialValue]);

  return { value, onChange, reset };
}
