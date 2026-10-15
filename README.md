# todo-react-avancado

Aplicação de lista de tarefas (Todo List) em React, desenvolvida como exercício do módulo 17 do curso de React avançado.

## Funcionalidades

- Adicionar tarefas
- Concluir / reabrir tarefas
- Remover tarefas
- Filtrar por: todas, pendentes e concluídas
- Persistência opcional no `localStorage`

## Tecnologias

- [React 18](https://react.dev/) (hooks: `useState`, `useEffect`, `useContext`, `useMemo`, `useCallback`)
- [Vite](https://vitejs.dev/) como bundler e servidor de desenvolvimento
- CSS puro com abordagem mobile first

## Estrutura

```
src/
├── components/   # TodoForm, TodoList, TodoItem (memo), TodoFilters (memo)
├── context/      # TodoContext: Provider global e hook useTodos
├── hooks/        # useLocalStorage, useInputValue (hooks customizados)
├── App.jsx
├── main.jsx
└── index.css
```

### Decisões de otimização

- `TodoItem` e `TodoFilters` usam `React.memo`, evitando re-renderizações quando suas props não mudam.
- A lista filtrada é calculada com `useMemo` em `TodoList`.
- O `value` do Context é memoizado e as ações usam `useCallback`, para que consumidores só re-renderizem quando o estado realmente muda.

## Como rodar localmente

Pré-requisitos: Node.js 18+ e npm.

```bash
# 1. Clone o repositório
git clone https://github.com/<seu-usuario>/todo-react-avancado.git
cd todo-react-avancado

# 2. Instale as dependências
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
```

Acesse o endereço exibido no terminal (por padrão, `http://localhost:5173`).

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```
