import React from 'react'
import styles from './UploadImage.module.css'

const UploadImage = () => {
  return (
    <>
      <label htmlFor="file" className={styles.label}></label>
      <input type="file" id="file" name="file" className={styles.input}/>
    </>
  )
}

export default UploadImage