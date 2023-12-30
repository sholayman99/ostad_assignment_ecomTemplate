import React from 'react';

const ThankYou = () => {
    return (
        <section className={"flex flex-col items-center justify-center my-24 gap-8"}>
           <img src="https://htmldemo.net/hmart/hmart/assets/images/icons/cmpted_logo.png" alt={""} />
           <p>Thank you for ordering in our store. You will receive a confirmation email shortly.</p>
           <button className={"btn btn-primary hover:btn-neutral btn-wide"}>Continue Shopping</button>
            <h2 className={"text-2xl font-bold text-neutral"}>Call Us for Quick Order</h2>
            <h3 className={"text-xl text-red-500 font-bold"}>01 234 567 890</h3>
        </section>
    );
};

export default ThankYou;