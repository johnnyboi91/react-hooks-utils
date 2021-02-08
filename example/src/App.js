import React from 'react'
import FirstTest from './FirstTest'
import SecondTest from './SecondTest'
import ThirdTest from './ThirdTest'
import FourthTest from "./FourthTest";
import styles from './styles.module.css'

const App = () => {
  return (
    <div className={styles.wrapper}>
      <FirstTest/>
      <SecondTest/>
      <ThirdTest/>
      <FourthTest/>
    </div>
  )
}

export default App
