export default function Cart(props:{count:number,price:number}){
    return <h2>Order summary<p>count:{props.count}</p> <p>price:{props.price}</p></h2>
}