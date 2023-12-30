import React from 'react';

const Speciality = () => {
    return (
        <section className={"grid grid-cols-3 rounded-xl gap-5 mx-10 border-2 min-h-[50vh] border-gray-300 my-6"}>
            <div className={"flex justify-evenly items-center"}>
                <div className={"bg-primary w-16 h-16 flex items-center justify-center rounded-full"}>
                    <img className={"w-[60%]"} src={"https://htmldemo.net/hmart/hmart/assets/images/icons/1.png"} alt={""} />
                </div>
                <div>
                    <h3 className={"text-lg font-bold"}>Free Shipping</h3>
                    <p>Capped at $39 per order</p>
                </div>
            </div>

            <div className={"flex justify-evenly items-center"}>
                <div className={"bg-primary w-16 h-16 flex items-center justify-center rounded-full"}>
                    <img className={"w-[60%]"} src={"https://htmldemo.net/hmart/hmart/assets/images/icons/2.png"} alt={""} />
                </div>
                <div>
                    <h3 className={"text-lg font-bold"}>Card Payments</h3>
                    <p>12 Months Installments</p>
                </div>
            </div>

            <div className={"flex justify-evenly items-center"}>
                <div className={"bg-primary w-16 h-16 flex items-center justify-center rounded-full"}>
                    <img className={"w-[60%]"} src={"https://htmldemo.net/hmart/hmart/assets/images/icons/3.png"} alt={""} />
                </div>
                <div>
                    <h3 className={"text-lg font-bold"}>Easy Returns</h3>
                    <p>Shop With Confidence</p>
                </div>
            </div>
        </section>
    );
};

export default Speciality;