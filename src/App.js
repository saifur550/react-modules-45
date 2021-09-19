// import logo from './physics.png';
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App">
      <MyFunction brand ="Apple" price ="100000"></MyFunction>
      <MyFunction brand ="smasung" price ="50000"></MyFunction>
      <MyFunction brand ="onePlus" price ="60000"></MyFunction>
      <MyFunction brand ="Lg" price ="250000"></MyFunction>
      <MyFunction brand ="Remi" price ="20000"></MyFunction>
      <MyFunction brand ="Nokia" price ="5000"></MyFunction>
     
    </div>
  );
}

function MyFunction(props){
  const [points, setPoints] = useState(1)
  const headerTop = {
    backgroundColor:'coral',
    border:'3px solid #000',
    padding:' 1rem',
    borderRadius:'10px',
    margin:'2rem '
  }
  const handlePoint = ()=>{
    console.log('clicked');
    const newPoint = points * 2;
    setPoints(newPoint)
  }



   return(
     <div className="f-family headerTop" style={headerTop}>
      <h2>{props.brand}</h2>
   <p style={{color:'black', fontWeight:'600'}}>{props.price}, I have points : {points}</p>
      <button style ={{background: 'skyblue',padding:'.5rem 2rem', border:'2px solid #333', fontSize:'1.2rem',cursor:'pointer'}} onClick={handlePoint} >Add Point</button>
     </div>
   )
}

export default App;




