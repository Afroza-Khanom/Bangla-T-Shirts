import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // conditional rendering 
    let message;
    if(cart.length === 0){
        message = <p>Please Add some product</p>
    }
    else{
        message= <div>
            <h3>boroloxx</h3>
            <p><small>Thanks for giving your money</small></p>
        </div>
    }
    return (
        <div>
            <h2 className={cart
            .length === 1 ? 'blue' : 'red'}>order summary: {cart.length} </h2>
            <p className={`bold bordered ${cart.length=== 3 ? 'yellow' : 'purple'}`}>Something</p>
            {/* conditional rendering : ternary operator use kore  */}
            {cart.length > 2 ? <span className='purple'>Aro kino</span> : <span>fokira</span>}
            {message}
            {
                cart.map(tshirt => <p key={tshirt._id}
                >{tshirt.name} <button onClick={()=>handleRemoveFromCart(tshirt._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>Double bonanza !! </p>
            }
            {
                cart.length === 3 || <h3>Tinta to hoilo na</h3> 
            }
        </div>
    );
};

export default Cart;


/**
 * CONDITIONAL RENDERING 
 * 1. Use if or if else to set a variable that will contain an element , components
 * 2. ternary: condition ? 'for true' : 'false' 
 * 3. Logical &&: (if the condition is true then the next thing will be di)
 * 4. Logical || (if condition is false then the next thing will be displayed)
 */

/**
 * CONDITIONAL CSS CLASS
 * 1: use ternary
 * 2: ternary inside template string
 * 
 */