import React from 'react';

const Poster = () => {
    return (
        <div className="hero min-h-[80vh] my-20 " style={{backgroundImage: 'url(https://htmldemo.net/hmart/hmart/assets/images/fashion/fashion-bg.webp)'}}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="">
                    <h1 className="mb-5 text-5xl  ">Smart Fashion</h1>
                    <h1 className="mb-5 text-6xl text-base-100 font-bold">With Smart Devices </h1>
                    <button className=" bg-transparent text-base-100  w-[40%] rounded-xl py-3 border-2 border-base-100
                    text-lg font-semibold hover:bg-primary hover:border-none">
                        Shop All Devices
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Poster;