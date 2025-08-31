import { useState } from "react"

export default function IceCream(props:{name:string,price:number,image:string,amount:number,setAllCount:any,setPrice:any}){
    const [count,setCount] = useState(0)
    const [iceAmount,setAmount] = useState(props.amount)
    return <div className="card">
        <h2 className="iceName">{props.name}</h2>
        <img src={props.image} className="iceImg" alt="ice cream"/>
        <p>price: {props.price}</p>
        <p>amount: {props.amount}</p>
       {(iceAmount?
        <button onClick={() => {
            if(iceAmount){
            setCount(count+1)
            props.setAllCount((c:number) => c+1)
            props.setPrice((c:number) => c + props.price)
            setAmount(iceAmount - 1)
            }
        }}>+</button>
        :<p className="alert">The ice cream is out of stock!</p>)}
         <p>{count}</p>
        <button onClick={() => {
            if(count){
            setCount(count-1)
            props.setAllCount((c:number) => c-1)
            props.setPrice((c:number) => c - props.price)
            setAmount(iceAmount + 1)
            }
        }}>-</button>
    </div>
}