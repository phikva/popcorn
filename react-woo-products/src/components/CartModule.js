import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CartModule = () => {
    const [cartContents, setCartContents] = useState([]);

    const fetchCartContents = async () => {
        try {
            // Fetch the cart contents using the appropriate endpoint.
            const response = await axios.get('/wp-json/cocart/v1/get-cart'); // Update with your WooCommerce endpoint to fetch cart
            setCartContents(response.data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    useEffect(() => {
        fetchCartContents();
    }, []); // Fetch cart contents on component mount

    return (
        <div>
            {/* Display cart contents here */}
            {cartContents.map(item => (
                <div key={item.key}>
                    <img src={item.images[0].src} alt={item.name} />
                    <h4>{item.name}</h4>
                    <p>{item.price} x {item.quantity}</p>
                </div>
            ))}
        </div>
    );
};

export default CartModule;