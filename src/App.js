import Header from './components/Header';
import bg_img from './img/bg_img.png';
import PriceItem from './components/PriceItem';
import NumItem from './components/NumItem';
import BtnItem from'./components/BtnItem';

const numbers = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20]]
  
const prices = [
  [1,5],
  [10,20]];
  
  const optBtns=['RANDOM','CASH','CLEAR'];

function App() {
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
      <PriceItem pr={pr} key={pr}>{prices}</PriceItem>
    ))}
    </div>
    </div>

    {/* for number choice in the middle */}
     <div className='middle'>
    <div className='numList'>
    {numbers.flat().map((num)=>(
      <NumItem num={num} key={num}>{numbers}</NumItem>
    ))}
    </div>

    <div className='btnItem'>
      {optBtns.map((optbtn)=>(
        <BtnItem optbtn={optbtn} key={optbtn}>{optbtn}</BtnItem>
      ))}
   </div>
   </div>

     {/* for display receipt */}
     <div className=' rightside'>

     </div>
     </div>

    </div>
  );
}

export default App;
