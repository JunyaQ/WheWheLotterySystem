import React from 'react'

const Sidebar = ({selectnum, totalPrice}) => {
  return (
    <div className='sidebar'>
        <p> Number Selected: </p>
        {/* {selectnum.map((num) => (
          <p key={num}>Mark: {num}</p> */}
        {/* ))} */}
      
        {selectnum && selectnum.map(num => (
          <p key={num}>Mark: {num}</p>
        ))}
        <br/>
        <p>Total: ${totalPrice}.00</p>
    </div>
  )
}
export default Sidebar;
 