import React from 'react'
import { useMouseCoordinates } from 'react-hooks-utilities'
import styles from './styles.module.css'

const FourthTest = () => {
  const { x, y } = useMouseCoordinates()
  return (
    <div className={styles.component}>
      <h2>useMouseCoordinates example</h2>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </div>
  )
}

export default FourthTest
