import React from 'react'
import { useDimensions } from 'react-hooks-utils'
import styles from './styles.module.css'

const SecondTest = () => {
  const {
    ref,
    height,
    width
  } = useDimensions()
  return (
    <div
      ref={ref}
      className={styles.component}>
      <h2>useDimensions example</h2>
      <p><b>Element width:</b> {width}px</p>
      <p><b>Element height:</b> {height}px</p>
      <small><i>Try resizing the browser window to see changes.</i></small>
    </div>
  )
}

export default SecondTest
