import styles from '../css/heading.module.css'

import React from 'react'

function Heading({ text }) {
  return (
    <>
      <div className={styles.galleryBackgroundText}>{text}</div>
      <div className={styles.galleryForegroundText}>{text}</div>
    </>
  )
}

export default Heading
