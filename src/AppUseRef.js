// 参考 https://www.to-r.net/media/react-tutorial-hooks-useref/
// import React from 'react'
// import Header from './components/Header'
// import TodoItem from './components/TodoItem'

// function App() {
//   const todos = [
//     { id: 0, text: 'やぁ', done: true },
//     { id: 1, text: 'Hi', done: false },
//   ]

//   return (
//     <div className="container">
//       <Header count={0} />
//       <form className="form">
//         <input type="text" className="form__input" placeholder="Add todo" />
//         <button className="form__button" type="submit">
//           ╋
//         </button>
//         <ul className="todos-list">
//           {todos.map((todo) => (
//             <TodoItem key={todo.id} text={todo.text} done={todo.done} />
//           ))}
//         </ul>
//       </form>
//       <footer className="footer">
//         <button className="footer__button active">All</button>
//         <button className="footer__button">Active</button>
//         <button className="footer__button">Complited</button>
//         <button className="footer__button delete-completed">
//           Delete completed
//         </button>
//       </footer>
//     </div>
//   )
// }

// export default App

// useRef カウントアップ
// import React, { useRef, useCallback } from 'react'
// const App = () => {
//   const count = useRef(0)
//   console.log('レンダリング')

//   const addCount = useCallback(() => {
//     count.current += 1
//   }, [])

//   const showLog = useCallback(() => {
//     console.log(count.current)
//   }, [])

//   return (
//     <>
//       <button onClick={addCount}>add count</button>
//       <button onClick={showLog}>show log</button>
//       <p>{count.current}</p>
//     </>
//   )
// }

// useState カウントアップ
// import React, { useState, useCallback } from 'react'
// const App = () => {
//   const [count, changeCount] = useState(0)
//   console.log('レンダリング')

//   const addCount = useCallback(() => {
//     changeCount((prevCount) => prevCount + 1)
//   }, [])

//   const showLog = useCallback(() => {
//     console.log(count)
//   }, [count])

//   return (
//     <>
//       <button onClick={addCount}>add count</button>
//       <button onClick={showLog}>show log</button>
//       <p>{count}</p>
//     </>
//   )
// }

// useRef フォーム
// import React, { useRef, useState, useCallback } from 'react'
// const App = () => {
//   console.log('レンダリング')
//   const inputEl = useRef(null)
//   const [text, changeText] = useState('')
//   const handleClick = useCallback(() => {
//     changeText(inputEl.current.value)
//   }, [])

//   return (
//     <>
//       <p>text : {text}</p>
//       <input ref={inputEl} type="text" />
//       <button onClick={handleClick}>set text</button>
//     </>
//   )
// }

import React, { useState, useCallback } from 'react'
const App = () => {
  console.log('レンダリング')
  const [tmpText, changeTmpText] = useState('')
  const [text, changeText] = useState('')

  const handleClick = useCallback(() => {
    changeText(tmpText)
  }, [tmpText])

  return (
    <>
      <p>text : {text}</p>
      <input
        value={tmpText}
        onChange={(e) => changeTmpText(e.target.value)}
        type="text"
      />
      <button onClick={handleClick}>set text</button>
    </>
  )
}

export default App
