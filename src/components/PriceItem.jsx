import React from "react";

const PriceItem =({pr})=>{
    return(
        <div className='priceItem'>
          <button className="prBtn">$ {pr}</button>
        </div>
    )
}

export default PriceItem