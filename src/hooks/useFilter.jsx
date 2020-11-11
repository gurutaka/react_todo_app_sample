import React, { useCallback, useMemo } from 'react'

const useFilter = (todos) => {
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
  const filteredTodos = useMemo(
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

  // FIXME: 引数を2つ以下に減らしたい
  return [filterBtns, filteredTodos, switchFilterMode]
}

export default useFilter
