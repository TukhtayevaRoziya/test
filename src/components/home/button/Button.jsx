import React from 'react'

import styles from './Button.module.css'

export const Button = () => {
  return (
    <div className={'body' + ' ' + styles.body}>
        <button className={styles.body__btn_white}>На карте</button>
        <button className={styles.body__btn_blue}>Все пляжи страны</button>
    </div>
  )
}
