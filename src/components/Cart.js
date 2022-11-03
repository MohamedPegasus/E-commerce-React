import React from 'react'
import { useCart } from 'react-use-cart'
import Button from 'react-bootstrap/Button';
import './styles.css'
const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
        items}=useCart();
        if(isEmpty)return<h1 className='headline'>your cart is empty</h1>
    return (
        <section>
        <div className='cart'>
        <div>
        <h5>cart ({totalUniqueItems}) total Items:({totalItems})</h5>
        <div>
            <tbody>
            {items.map((item, index)=>{
                return(
                <tr className='pkline' key={index}>
                    <td>
                        <img src={item.img} />
                    </td>
                    <td className='lin' style={{whiteSpace:'nowrap', width:"14rem",overflow:"hidden",textOverFlow:"ellipis"}}>{item.title}</td>
                    <br></br>
                    <td className='lin' >{item.price}$</td>
                    <br></br>
                    <br></br>
                    <td className='lin'>Quantity ({item.quantity})</td>
                    <td className='lin'>
                        <Button variant="warning"  onClick={()=>updateItemQuantity(item.id, item.quantity -1)}>-</Button>
                        <Button variant="info" onClick={()=>updateItemQuantity(item.id, item.quantity +1)} >+</Button>
                        <Button variant="danger" onClick={()=>removeItem(item.id)}>Remove Item</Button>
                    </td>
                </tr>
                )
            })}
            </tbody>
        </div>
        <div>
            <h2>Total Price: {cartTotal} $</h2>
            <br></br>
            <br></br>
            <br></br>
            <Button variant="danger" onClick={emptyCart}>Clear Cart</Button>
            <Button variant="success" onClick={emptyCart}>Buy now</Button>
        </div>
        </div>
        </div>
        </section>
    )
}

export default Cart;
