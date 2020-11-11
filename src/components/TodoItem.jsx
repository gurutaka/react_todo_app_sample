import React, { memo } from 'react'
// 参考
// https://www.yoheim.net/blog.php?q=20180701
import classNames from 'classnames'

const TodoItem = (props) => {
  const handleClick = () => {
    props.onItemClick()
  }

  const handleXClick = () => {
    props.onItemDelete()
  }

  console.log('TodoItem レンダリング')

  return (
    <li className="todo-item">
      <span
        className={classNames('todo-item__name', {
          disabled: props.done,
        })}
        onClick={handleClick}
      >
        {props.text}
      </span>
      <span className="todo-item__delete-button" onClick={handleXClick}>
        ×
      </span>
    </li>
  )
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.done === nextProps.done
}

export default memo(TodoItem, areEqual)
