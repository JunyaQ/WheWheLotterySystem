import React, { useState } from "react";

const NumItem = ({num}) => {
    const [btnStatus, setBtnStatus] = useState(false); // Simplified state for a single button
    const list=[];

    const actionButton = () => {
      if (list.length < 6) {
        setBtnStatus(!btnStatus); // change button true and false
          
        console.log("check counter: " )
      } else {
          // Show an alert if the button has been clicked 5 or more times
          alert("Button click limit reached.");
      }
  };

    return (
        <div>
            <button
                className={`numItem ${btnStatus ? 'buttonOn' : 'buttonOff'}`}
                onClick={actionButton}>
                {num}
            </button>   
        </div>
    );
};

export default NumItem;