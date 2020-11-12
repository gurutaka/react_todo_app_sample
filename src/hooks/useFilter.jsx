import { useMemo } from 'react'

const useFilter = (todos, mode) => {
  const filterBtns = ['All', 'Active', 'Complited']

  // useMemo でキャッシュ
  // 再レンダリング時に、再計算する必要なし
  const filteredTodos = useMemo(
    () =>
      todos.filter((todo) => {
        switch (mode) {
          case 'All':
            return true
          case 'Active':
            return !todo.done
          case 'Complited':
            return todo.done
        }
      }),
    [todos, mode],
  )

  return [filterBtns, filteredTodos]
}

export default useFilter
