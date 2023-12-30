import React from 'react';
import CartBanner from "../components/Carts/CartBanner.jsx";
import CartsItems from "../components/Carts/CartsItems.jsx";

const Carts = () => {
    return (
        <div>
            <CartBanner />
            <CartsItems />
        </div>
    );
};

export default Carts;