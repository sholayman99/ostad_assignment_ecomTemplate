import React from 'react';

const BillingDetails = () => {
    return (
        <div className={"w-full"}>
            <h2 className={"text-2xl font-bold"}>Billing Details</h2>
            <div>
                <form action={"#"}>
                    <div className="form-control my-5">
                        <div className={"flex items-center gap-5"}>

                            <input placeholder={"Name"} type={"text"} className={"outline-none border border-gray-400" +
                                " focus:border-primary w-full p-3"}/>
                            <input placeholder={"Email"} type={"text"} className={"outline-none border border-gray-400" +
                                " focus:border-primary w-full p-3"}/>
                        </div>
                    </div>

                    <div className={"form-control mb-5"}>
                        <input type={"text"} placeholder={"Your Company Name"} className={"outline-none focus:border " +
                            "focus:border-primary border border-gray-400 p-3"}/>
                    </div>

                    <div className={"form-control mb-5"}>
                        <select className="border p-3 text-neutral border-gray-400 outline-none w-full">
                            <option disabled selected>Select a country</option>
                            <option>Bangladesh</option>
                            <option>Nepal</option>
                            <option>Sri Lanka</option>
                            <option>Pakistan</option>
                        </select>
                    </div>

                    <div className={"form-control mb-5"}>
                        <input type={"text"} placeholder={"Your House number and street home"} className={"outline-none focus:border " +
                            "focus:border-primary border mb-2 border-gray-400 p-3"}/>
                        <input type={"text"} placeholder={"Your Apartment,suite,unit etc"} className={"outline-none focus:border " +
                            "focus:border-primary border border-gray-400 p-3"}/>
                    </div>
                    <div className={"form-control mb-5"}>
                        <input type={"text"} placeholder={"Your Town/City"} className={"outline-none focus:border " +
                            "focus:border-primary border border-gray-400 p-3"}/>

                    </div>

                    <div className="form-control mb-5">
                        <div className={"flex items-center gap-5"}>
                                <input placeholder={"Your State/County"} type={"text"} className={"outline-none border border-gray-400" +
                                    " focus:border-primary w-full p-3"}/>
                                <input placeholder={"Your Postcode/ZIP"} type={"text"} className={"outline-none border border-gray-400" +
                                    " focus:border-primary w-full p-3"}/>
                            </div>
                    </div>

                    <div className="form-control mb-5">
                        <div className={"flex items-center gap-5"}>
                            <input placeholder={"Your Phone"} type={"text"} className={"outline-none border border-gray-400" +
                                " focus:border-primary w-full p-3"}/>
                            <input placeholder={"Your Email Address"} type={"text"} className={"outline-none border border-gray-400" +
                                " focus:border-primary w-full p-3"}/>
                        </div>
                    </div>

                    <div>
                        <h3 className={"text-lg my-5 font-bold"}>Additional Information</h3>

                        <div className={"form-control"}>

                            <textarea className={"outline-none p-3 border border-gray-400 focus:border-primary"}
                            rows={"5"} placeholder={"Your order notes"} ></textarea>
                        </div>

                    </div>

                </form>

            </div>
        </div>
    );
};

export default BillingDetails;