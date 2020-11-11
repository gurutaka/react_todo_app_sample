import React, { memo } from 'react'
import classNames from 'classnames'

const Btn = (props) => {
  console.log('ボタン レンダリング')
  return (
    <button
      className={classNames('footer__button', {
        active: props.isActive,
        'delete-completed': props.isDeleteBtn || false,
      })}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  )
}

const areEqual = (prevProps, nextProps) => {
  return prevProps.isActive === nextProps.isActive
}

export default memo(Btn, areEqual)
