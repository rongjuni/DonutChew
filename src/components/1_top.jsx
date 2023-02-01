/* eslint-disable */
import { useState } from "react"
import donut from "../img/donut.png"
import drink from "../img/drink.png"
import croffle from "../img/croffle.png"
import './1_top.css'
  
const Top = ({ setPrice }) => {

  const itemClicked = (itemSelected) => { 
    {
      if (itemSelected === 'donut') {
        setPrice(3.5)
      } else if(itemSelected === 'drink'){
        // console.log('drink is selected')
        setPrice(4.0)
      } else if(itemSelected === 'croffle'){
        console.log('croffle is selected')
        setPrice(4.5)
      }
    }
  }

  return (
    <div className='top'>
      <div className='top-icons'>
        
        <img src={donut} alt="donut" 
        className='top-icons-item' onClick={() => itemClicked('donut')}  />
        
        
        <img src={drink} alt="drink" className='top-icons-item' onClick={() => { itemClicked('drink') }} />
        
        <img src={croffle} alt="croffle" className='top-icons-item' onClick={() => { itemClicked('croffle') }} />
      </div>
    </div>
  )
  
}
  




export default Top;