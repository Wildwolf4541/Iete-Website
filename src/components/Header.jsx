import styles from '../css/event.module.css'
import React from 'react'

function Heading({ text }) {
  return (
    <>
      <h1 className={styles.eventTitle}>{text}</h1>
      <h3 className={styles.customH3}>{text}</h3>
    </>
  )
}

export default Heading
