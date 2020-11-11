// useState バージョン
import React, { useRef, useCallback, memo } from 'react'

const TodoInput = (props) => {
  const textRef = useRef(null)

  const reset = () => {
    textRef.current.value = ''
  }

  const handleClick = useCallback(() => {
    props.onAdd(textRef.current.value)
    reset()
  }, [])

  // レンダリング確認
  console.log('Todo Input レンダリング')
  return (
    <>
      <input
        type="text"
        className="form__input"
        placeholder="Add Todo"
        ref={textRef}
      />
      <button className="form__button" onClick={handleClick}>
        ╋
      </button>
    </>
  )
}

// export default TodoInput
// キャッシュ
export default memo(TodoInput)

// // useState バージョン
// import React, { useState } from 'react'

// const TodoInput = (props) => {
//   const [text, setText] = useState('')
//   const handleChange = (e) => setText(() => e.target.value)
//   const handleClick = (text) => {
//     props.onAdd(text)
//   }

//   console.log('レンダリング')
//   return (
//     <>
//       <input
//         type="text"
//         className="form__input"
//         placeholder="Add Todo"
//         value={text}
//         onChange={handleChange}
//       />
//       <button className="form__button" onClick={() => handleClick(text)}>
//         ╋
//       </button>
//     </>
//   )
// }

// export default TodoInput
