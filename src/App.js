import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'
import useFilter from './hooks/useFilter'
import useTodos from './hooks/useTodos'
import useMode from './hooks/useMode'

function App() {
  console.log('全体レンダリング')
  const [
    todos,
    { toggleDone, deleteTodo, addTodo, deleteAllTodos },
  ] = useTodos()

  const [mode, setNewMode] = useMode()
  const [filterBtns, displayTodos] = useFilter(todos, mode)

  return (
    <div className="container">
      <Header count={todos.length} />
      <div className="form">
        <TodoInput onAdd={addTodo} />
        <ul className="todos-list">
          {displayTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              done={todo.done}
              // 引数渡したいときは、関数内で記述する必要あるため注意
              onItemClick={() => toggleDone(todo.id)}
              onItemDelete={() => deleteTodo(todo.id)}
            />
          ))}
        </ul>
      </div>
      <Footer
        onDeleteAllTodos={deleteAllTodos}
        filterBtns={filterBtns}
        filterMode={mode}
        onSwitchFilterMode={setNewMode}
      />
    </div>
  )
}

export default App
