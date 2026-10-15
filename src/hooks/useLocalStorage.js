import { useEffect, useState } from 'react';

// Estado sincronizado com localStorage. Falhas de leitura/escrita
// (modo privado, quota, JSON inválido) não quebram a aplicação.
export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = window.localStorage.getItem(key);
      return stored !== null ? JSON.parse(stored) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Persistência é apenas um reforço; ignora erros de escrita.
    }
  }, [key, value]);

  return [value, setValue];
}
