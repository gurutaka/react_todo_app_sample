import React, { useCallback, useMemo } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import TodoItem from './components/TodoItem'
import TodoInput from './components/TodoInput'

function App() {
  console.log('全体レンダリング')
  const [todos, setTodos] = React.useState([])

  const toggleDone = (id) => {
    // 注意：新たに 配列をコピーしないとダメ
    // 参考：https://gotohayato.com/content/509/
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        return {
          ...todo,
          done: todo.id === id ? !todo.done : todo.done,
        }
      }),
    )
  }

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
  }

  // TodoInput の memo の第2引数がないため、useCallback が必要
  const addTodo = useCallback((text) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: new Date().getTime(), text: text, done: false },
    ])
  }, [])

  const [filterBtns, setFilterBtns] = React.useState([
    {
      mode: 'All',
      isActive: true,
    },
    {
      mode: 'Active',
      isActive: false,
    },
    {
      mode: 'Complited',
      isActive: false,
    },
  ])

  // useMemo でキャッシュ
  // 再レンダリング時に、再計算する必要なし
  const filterMode = useMemo(
    () => filterBtns.find((btn) => btn.isActive).mode,
    [filterBtns],
  )

  // useMemo でキャッシュ
  // 再レンダリング時に、再計算する必要なし
  const displayTodos = useMemo(
    () =>
      todos.filter((todo) => {
        switch (filterMode) {
          case 'All':
            return true
          case 'Active':
            return !todo.done
          case 'Complited':
            return todo.done
        }
      }),
    [todos, filterMode],
  )

  // 再レンダリング時に、再定義する必要なし
  // キャッシュしなくても、フッターの再レンダリングはされない（レンダリングの条件があるため）
  const switchFilterMode = useCallback((mode) => {
    setFilterBtns((prevBtns) =>
      prevBtns.map((btn) => {
        return {
          ...btn,
          isActive: btn.mode === mode ? true : false,
        }
      }),
    )
  }, [])

  // 再レンダリング時に、再定義する必要なし
  const deleteAllTodos = useCallback(() => {
    setTodos(() => [])
  }, [])

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
        onFilterTodos={switchFilterMode}
      />
    </div>
  )
}

export default App
