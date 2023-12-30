import React from 'react';
import CheckoutBanner from "../components/Checkout/CheckoutBanner.jsx";
import BillingDetails from "../components/Checkout/BillingDetails.jsx";
import Invoice from "../components/Checkout/Invoice.jsx";

const CheckOut = () => {
    return (
        <div>
           <CheckoutBanner />
            <div className={"flex items-start justify-between gap-12 px-10 my-24"}>
                <BillingDetails />
                <Invoice />
            </div>
        </div>
    );
};

export default CheckOut;