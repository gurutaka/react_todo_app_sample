import React, { memo } from 'react'

const Header = (props) => {
  console.log('ヘッダー レンダリング')
  return (
    <header className="header">
      <h1>Todo List (React only)</h1>
      <h3>All To-Do Todo {props.count}</h3>
    </header>
  )
}

const areEqual = (prevProps, nextProps) => {
  // カウント数が同じ場合は、再レンダリングされない
  return prevProps.count === nextProps.count
}

export default memo(Header, areEqual)
