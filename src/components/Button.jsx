import React from 'react'
import styles from '../css/button.module.css'

function Button({ text }) {
  return (
    <button className={styles['Btn-Container']}>
      <span className={styles.text}>{text}</span>
      <span className={styles['icon-Container']}>
        <svg
          width="16"
          height="19"
          viewBox="0 0 16 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
          <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
          <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
          <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
          <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
          <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
          <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
        </svg>
      </span>
    </button>
  )
}

export default Button
