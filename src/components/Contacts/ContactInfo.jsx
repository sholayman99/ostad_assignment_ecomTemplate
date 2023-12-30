import React from 'react';

const ContactInfo = () => {
    return (
        <section className={"flex items-center my-24 justify-center gap-10"}>
            <div className="card bg-base-100 w-[250px]  shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://htmldemo.net/hmart/hmart/assets/images/icons/contact-1.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Address</h2>
                    <p>Your address goes here.
                        123 Your Location</p>

                </div>
            </div>

            <div className="card bg-base-100 w-[250px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://htmldemo.net/hmart/hmart/assets/images/icons/contact-2.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Phone No</h2>
                    <p>+012 345 67 89</p>
                    <p>+012 345 67 89</p>

                </div>
            </div>

            <div className="card bg-base-100 w-[250px] shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://htmldemo.net/hmart/hmart/assets/images/icons/contact-3.png" alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Email/Web</h2>
                    <p>demo@example.com</p>
                    <p>www.example.com</p>

                </div>
            </div>
        </section>
    );
};

export default ContactInfo;