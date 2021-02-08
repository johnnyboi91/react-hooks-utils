import React from 'react'
import { useWindowDimensions } from 'react-hooks-utilities'
import styles from './styles.module.css'

const ThirdTest = () => {
  const {
    width,
    height,
    breakpoint
  } = useWindowDimensions()
  return (
    <div className={styles.component}>
      <h2>useWindowDimensions example</h2>
      <p><b>Window width:</b> {width}px</p>
      <p><b>Window height:</b> {height}px</p>
      <p><b>Current breakpoint:</b> {breakpoint}</p>
      <small><i>Try resizing the browser window to see changes.</i></small>
    </div>
  )
}

export default ThirdTest
