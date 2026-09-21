import React from 'react'
import head from './header.module.css'

const Header = () => {
  return (
    <div className={head.header}>
        <h3 className={head.logo}>Sheryians</h3>
        <button className={head.btn}>Login</button>
    </div>
  )
}

export default Header