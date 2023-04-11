import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirt from '../TShirt/TShirt';
import Cart from '../Cart/Cart';
import './Home.css'
import toast from 'react-hot-toast';

const Home = () => {
    const tShirts = useLoaderData();
    const [cart, setCart] = useState([]);

    const handleAddToCart = tshirt => {
        const exists = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            toast('You have already added same tshirt')
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);
        }
        
    }

    const handleRemoveFromCart = id =>{
        // console.log(id);
        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining); 
    }
    return (
        <div className='home-container'>
            <div className='t-shirts-container'>
            {
                tShirts.map(tShirt => <TShirt key={tShirt._id}
                tShirt={tShirt}
                handleAddToCart={ handleAddToCart}></TShirt>)
            }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}
                handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;