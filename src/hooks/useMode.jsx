import React, { useCallback } from 'react'

const useMode = () => {
  const [mode, setMode] = React.useState('All')

  const setNewMode = useCallback((mode) => {
    setMode(() => mode)
  }, [])

  return [mode, setNewMode]
}

export default useMode
