import React from 'react';
import {Link} from "react-router-dom";

const Invoice = () => {
    return (
        <div className={"max-w-md "}>
           <h2 className={"text-2xl mb-3 font-bold"}>Your Order</h2>

            <div className={"bg-[#EBEBEB] p-8"}>
                 <div>
                     <div className={"flex items-center  justify-between"}>
                         <h3 className={"text-lg font-bold"}>Product</h3>
                         <h3 className={"text-lg font-bold"}>Total</h3>
                     </div>
                     <div className={"flex items-center mt-5 mb-2  justify-between"}>
                         <h3 className={"text-lg"}>Product Name x 1</h3>
                         <h3 className={"text-lg "}>$100.00</h3>
                     </div>
                     <div className={"flex items-center mb-5  justify-between"}>
                         <h3 className={"text-lg"}>Product Name x 2</h3>
                         <h3 className={"text-lg "}>$200.00</h3>
                     </div>

                     <div className={"flex items-center my-10  justify-between"}>
                         <h3 className={"text-lg font-bold"}>Shipping</h3>
                         <h3 className={"text-md "}>Free shipping</h3>
                     </div>

                     <div className={"flex items-center my-10  justify-between"}>
                         <h3 className={"text-lg font-bold"}>Total</h3>
                         <h3 className={"text-md font-bold text-primary"}>$300.00</h3>
                     </div>

                     <div>
                         <h3 className={"text-lg font-bold"}>Direct Bank Transfer</h3>
                         <p className={"m-3 text-sm text-justify"}>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                     </div>
                     <div className={"my-8"}>
                         <h3 className={"text-lg  font-bold"}>Check payments</h3>
                         <h3 className={"text-lg my-3 font-bold"}> Cash on delivery</h3>
                     </div>

                     <Link to={"/thank-you"}><button className={"btn uppercase btn-primary w-full rounded-none hover:btn-neutral" +
                         " text-base-100"}>place order</button></Link>

                 </div>
            </div>
        </div>
    );
};

export default Invoice;