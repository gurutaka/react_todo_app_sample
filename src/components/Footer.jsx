import React, { memo } from 'react'
import Btn from './Btn'

const Footer = (props) => {
  console.log('フッター レンダリング')

  return (
    <footer className="footer">
      {props.filterBtns.map((btn) => {
        return (
          <Btn
            key={btn.mode}
            text={btn.mode}
            isActive={btn.isActive}
            handleClick={() => props.onSwitchFilterMode(btn.mode)}
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

const areEqual = (prevProps, nextProps) => {
  return prevProps.filterBtns === nextProps.filterBtns
}

export default memo(Footer, areEqual)
