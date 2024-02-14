import React from 'react'
import NumItem from './NumItem'

const BtnItem = ({optbtn, actionButton}) => {
  return (
    <div>
        <button className='optBtn'>{optbtn}</button>
    </div>
  )
}
export default BtnItem