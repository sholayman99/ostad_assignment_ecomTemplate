import React from 'react';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{backgroundImage: 'url(https://cdn.pixabay.com/photo/2018/09/21/07/07/e-commerce-3692440_1280.jpg)'}}>
            <div className="hero-overlay bg-opacity-0"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-neutral  font-bold">Easy Your Life</h1>
                   <h1 className="mb-5 text-5xl text-neutral font-bold">For Smart Device</h1>
                    <button className=" bg-base-100 text-neutral w-[55%] rounded-xl py-3.5 border-2 border-neutral
                    text-lg font-semibold hover:bg-neutral hover:text-base-100 hover:border-none">
                       Shop All Devices
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Banner;