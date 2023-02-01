import { useState } from "react"
import "./2_middle.css"


export default function Mid({ price }) {

  let [qty, setQty] = useState([])
  let [subTotal, setSubtotal] = useState([0]);
  let [grandTotal, setGrandTotal] = useState(0)

  const calSubtotal = () => {
    let changeToInt = parseInt(qty.join(''))
    let amount = changeToInt * price
    
    let subTotalCopy = subTotal;
    subTotalCopy.push(amount)
    setSubtotal(subTotalCopy)
    console.log(subTotal)
    setQty([])
   }

  const keypadClick = (num) => { 
    let copyQty = qty;
    copyQty.push(num)
    setQty(copyQty)
    console.log(qty)
  }

  const clear = () => { 
    setSubtotal([])
    setQty([])
    console.log(subTotal)
  }

  const calGrandTotal = () => { 
    subTotal.map((val) => {
      setGrandTotal(grandTotal + val)
    })
    console.log('grantotal', grandTotal)
    setSubtotal([])
  }

  return (
    <div className='mid-container'>
      <div className='mid-left'>
      <div className='mid-num-keypad'>
        <div className='mid-line-number' onClick={() => {keypadClick(1)}}>1</div>
        <div className='mid-line-number' onClick={() => {keypadClick(2)}}>2</div>
        <div className='mid-line-number' onClick={() => {keypadClick(3)}}>3</div>
      </div>
      
      <div className='mid-num-keypad'>
        <div className='mid-line-number' onClick={() => {keypadClick(4)}}>4</div>
        <div className='mid-line-number' onClick={() => {keypadClick(5)}}>5</div>
        <div className='mid-line-number' onClick={() => {keypadClick(6)}}>6</div>
      </div>

      <div className='mid-num-keypad'>
        <div className='mid-line-number' onClick={() => {keypadClick(7)}}>7</div>
        <div className='mid-line-number' onClick={() => {keypadClick(8)}}>8</div>
        <div className='mid-line-number' onClick={() => {keypadClick(9)}}>9</div>
      </div>
      
        <div className='mid-num-keypad'>
          <div className='mid-line-number' onClick={() => { clear() }}>clear</div>
          <div className='mid-line-number' onClick={() => { keypadClick(0) }}>0</div>
          <div className='mid-line-number' onClick={() => { calSubtotal() }}>enter</div>
        </div>

        <div className='mid-num-keypad'>
          <div className='mid-line-number' onClick={() => { calGrandTotal() }}>TOTAL</div>
        </div>

      </div>

      <div className='mid-right'>
        <div className='subtotal-list'>
          {subTotal.map( (val) => {
            return (
              <div>
                {val}
              </div>
            )
           } )}
        </div>

        <div className='grandtotal'>Subtotal : $ { grandTotal}</div>
        <div className='salestax'>Sales tax : $ { grandTotal * 0.06}</div>
        <div className='grandtotal'>Total : $ {grandTotal * 1.06}</div>
      </div>
    </div>
  )
}
