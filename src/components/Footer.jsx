import React, { memo } from 'react'
import Btn from './Btn'

const Footer = (props) => {
  console.log('フッター レンダリング')

  return (
    <footer className="footer">
      {props.filterBtns.map((btn) => {
        return (
          <Btn
            key={btn}
            text={btn}
            isActive={props.filterMode === btn}
            handleClick={() => props.onSwitchFilterMode(btn)}
          />
        )
      })}
      <Btn
        text="Delete completed"
        isActive={false}
        isDeleteBtn={true}
        handleClick={props.onDeleteAllTodos}
      />
    </footer>
  )
}

const areModeEqual = (prevProps, nextProps) => {
  return prevProps.filterMode === nextProps.filterMode
}

export default memo(Footer, areModeEqual)
