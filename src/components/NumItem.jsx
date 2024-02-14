import React, { useState } from "react";

const NumItem = ({num}) => {
    const [btnStatus, setBtnStatus] = useState(false); // Simplified state for a single button
   const [list,setList] = useState([]);
    

const actionButton = () => {
 
  if (list.length < 6 && !btnStatus) {
    setBtnStatus(prevStatus => !prevStatus); // change button t->f
    setList(prevList => [...prevList, num.toString()]);
    console.log("btn status " + !btnStatus + " add num: " + num);
    console.log([...list, num.toString()]); // Log updated list
  } else if (list.length < 6 && btnStatus) {
    setBtnStatus(prevStatus => !prevStatus);
    setList(prevList => prevList.filter(item => item !== num.toString()));
    console.log("btn status " + !btnStatus + " remove num: " + num);
    console.log(list.filter(item => item !== num.toString())); // Log updated list
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