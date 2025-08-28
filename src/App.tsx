import { useState } from 'react'
import './App.css'
import IceCream from './componnents/iceCream'
import Cart from './componnents/cart'
import Logo from './componnents/logo'

function App() {
  const iceCreams = [{name:'vanile',price:4,image:'../src/assets/images/vanile.png',amount:0},{name:'choclate',price:3,image:'../src/assets/images/choclate.png',amount:8},{name:'mango',price:6,image:'../src/assets/images/mango.png',amount:10}];
  const [showOnlyAvailable, setOnlyAvailable] = useState(false);
  const [count,setCount] = useState(0)
  const [price,setprice] = useState(0)
  return (
    <>
    <Logo logo='ICE CREAM'/>
    <div id='showOnlyAvailable'><button onClick={() => setOnlyAvailable(prev => !prev)}>Show only available</button></div>
    <main>
      {!showOnlyAvailable ? iceCreams.map(c => (
        <IceCream key={c.name} name={c.name} price={c.price} image={c.image} amount={c.amount} setAllCount={setCount} setPrice={setprice}/>
      )) : (iceCreams.filter(flavor => flavor.amount)).length?iceCreams.map(c => (
        <IceCream key={c.name} name={c.name} price={c.price} image={c.image} amount={c.amount} setAllCount={setCount} setPrice={setprice}/>
      )):<h1 className="alert">No reasons to show</h1>}
    </main>
     <Cart count={count} price={price}/>
    </>
  )
}

export default App
