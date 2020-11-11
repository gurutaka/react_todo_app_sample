import React, { useCallback } from 'react'

const useTodos = () => {
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

  const deleteAllTodos = useCallback(() => {
    setTodos(() => [])
  }, [])

  return [todos, { toggleDone, deleteTodo, addTodo, deleteAllTodos }]
}

export default useTodos
