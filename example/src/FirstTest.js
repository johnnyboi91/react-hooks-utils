import React from 'react'
import { useStateWithCb } from 'react-hooks-utils'
import styles from './styles.module.css'

const testCallback = (value) => {
  /** @type {HTMLElement} */
  const el = document.getElementById('test')
  el.innerText = `Current value is ${value}`
}

const FirstTest = () => {
  const [state, setState] = useStateWithCb(0, testCallback)
  const increment = () => setState((prev) => prev + 1)
  const decrement = () => setState((prev) => prev - 1)
  return (
    <div className={styles.component}>
      <h2>useStateWithCb example</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <p id="test"/>
      <small><i>By clciking on Increment/Decrement, callback passed to <b>useStateWithCb</b> will change paragraph (#test) text.</i></small>
    </div>
  )
}

export default FirstTest
