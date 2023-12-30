import React from 'react';

const ProductBanner = () => {
    return (
        <div className="hero min-h-[90vh] " style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/concept-online-shopping-shopping-cart-floating-laptop-3d-illustration-banner-e-commerce_522591-1459.jpg?size=626&ext=jpg&uid=R74726837&ga=GA1.1.1141504738.1703593593&semt=ais)'}}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl text-neutral font-semibold ">Products</h1>
                    <h3 className="text-lg text-neutral uppercase">Home<span className={"text-primary"}> // Products</span></h3>

                </div>
            </div>
        </div>
    );
};

export default ProductBanner;