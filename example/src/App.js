import React from 'react'
import FirstTest from './FirstTest'
import SecondTest from './SecondTest'
import ThirdTest from './ThirdTest'
import styles from './styles.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <FirstTest/>
      <SecondTest/>
      <ThirdTest/>
    </div>
  )
}

export default App
