import React from 'react'
import menuImg from '../../assests/foodmenu.png'

const Menu = () => {
  return (
    <div style={{borderTop: '5px groove grey', marginTop:'2em'}}>
        <img src={menuImg} style={{width:'-webkit-fill-available', margin:'1em 12em'}} alt='menu' />
    </div>
  )
}

export default Menu