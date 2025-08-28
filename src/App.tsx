import { useState } from 'react'
import './App.css'
import IceCream from './componnents/iceCream'
import Cart from './componnents/cart'
import Logo from './componnents/logo'

function App() {
  const [iceCreams, setIceCreams] = useState([{name:'vanile',price:4,image:'../src/assets/images/vanile.png',amount:5},{name:'choclate',price:3,image:'../src/assets/images/choclate.png',amount:12}]);
  const [showOnlyAvailable, setOnlyAvailable] = useState(false);
  const [count,setCount] = useState(0)
  const [price,setprice] = useState(0)
  return (
    <>
    <Logo logo='ICE CREAM'/>
    <main>
      {!showOnlyAvailable ? iceCreams.map(c => (
        <IceCream key={c.name} name={c.name} price={c.price} image={c.image} amount={c.amount} setAllCount={setCount} setPrice={setprice}/>
      )) : iceCreams.filter(flavor => flavor.amount).map(c => (
        <IceCream key={c.name} name={c.name} price={c.price} image={c.image} amount={c.amount} setAllCount={setCount} setPrice={setprice}/>
      ))}
    </main>
    <button id='showOnlyAvailable' onClick={() => setOnlyAvailable(prev => !prev)}>Show only available</button>
     <Cart count={count} price={price}/>
    </>
  )
}

export default App
