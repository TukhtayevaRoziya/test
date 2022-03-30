import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Chips.module.css'

export const Chips = () => {

    const data = [
        {id:1, txt:'Пляжи', path:'/'},
        {id:2, txt:'Breezzor Pass', path:'/breezzor'},
        {id:3, txt:'Впечатления', path:'/impression'},
        {id:4, txt:'Маршруты', path:'/route'},
    ]

    const dataMap = data.map(d=><NavLink key={d.id} to={d.path}>{d.txt}</NavLink>)

  return (
    <div className={'body' + ' ' +styles.body}>
        {dataMap}
    </div>
  )
}
