import Header from './components/Header';
import bg_img from './img/bg_img.png';
import PriceItem from './components/PriceItem';
import NumItem from './components/NumItem';
import BtnItem from'./components/BtnItem';
import { useState } from 'react';
import Sidebar from './components/Sidebar';

const numbers = 
  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  
const prices = [
  [1,5],
  [10,20]];
  


function App() {
  const[totalPrice,setTotalPrice] = useState(0);// for price
  const addPrice = (pr) =>{
    console.log("Total price: "+totalPrice);
    setTotalPrice(totalPrice+pr);
  }

  const[selectnum,setSelectnum] = useState([]);// for a list of 5 nums
  const addNum = (num) =>{
    console.log(selectnum);
    if(selectnum.includes(num)){
      setSelectnum(selectnum.filter(n=>n!==num));
    }
    else if (selectnum.length<5){
      setSelectnum([...selectnum,num]);
    }
    else{
      alert("Please remove a number before select another one (MAX 5 numbers)");
    }
  }
  // for btns
  const clickClear = () =>{
    console.log("clear");
    setSelectnum([]);
    setTotalPrice(0);
    console.log("clear");
  }

  // random function doesn't work
  const clickRandom = () =>{
    console.log("Random");
// while random <5  keep adding to the list, and show on btnstatus
  }

  const [display, setDisplay] = useState(false);
  const clickCash = () =>{
    console.log("cash");
    setDisplay(!display);
  }
  return (
    <div className="App">
      {/* for header */}
      <div className='header'>
      <Header/>
      </div>
      <div className='container'>
    {/*left side, img and price bar */}
    <div className='leftside'>
    <img src={bg_img}/>
   
    <div className='priceList'>
    {prices.flat().map((pr)=>(
      // if selected number length ==5 then can add price
      <PriceItem pr={pr} key={pr} addpr={addPrice} available={selectnum.length==5}/>
    ))}
    </div>
    </div>

    {/* for number choice in the middle */}
     <div className='middle'>
    <div className='numList'>
    {numbers.map((num)=>(
      <NumItem num={num} key={num} select={addNum} btnStatus={selectnum.includes(num)}>{numbers}</NumItem>
    ))}
    </div>

    <div className='btnItem'>
      {/* {optBtns.map((optbtn)=>(
        <BtnItem optbtn={optbtn} key={optbtn} onClick={`${optbtn}`}>{optbtn}</BtnItem>
      ))} */}
      <BtnItem optbtn="CLEAR" clickButton={clickClear}/>
      <BtnItem optbtn="RANDOM" clickButton={clickRandom}/>
   </div>
   </div>

     {/* for display receipt */}
     <div className=' rightside btnItem'>
    
     {display == true && <Sidebar selectnum={selectnum} totalPrice={totalPrice} />}
        <BtnItem optbtn="CASH" clickButton={clickCash}/>
     </div>
     </div>

    </div>
  );
}

export default App;
