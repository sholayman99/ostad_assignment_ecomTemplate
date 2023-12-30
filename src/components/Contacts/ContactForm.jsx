import React from 'react';

const ContactForm = () => {
    return (
        <section className={"py-10 mx-10 bg-[#F5F5F5] "}>
            <h1 className={"text-5xl text-neutral text-center my-5 font-semibold"}>Send A Quest</h1>

            <div className={"px-20 my-10"}>
                <div className={"form-control"}>
                   <div className={"flex items-center gap-5"}>
                       <input placeholder={"Name"} type={"text"} className={"outline-none border border-gray-400" +
                           " focus:border-primary rounded-lg w-full p-3"}/>
                       <input placeholder={"Email"} type={"text"} className={"outline-none border border-gray-400" +
                           " focus:border-primary rounded-lg w-full p-3"}/>
                   </div>
                </div>

                <div className={"form-control mt-5"}>
                        <input placeholder={"Subject"} type={"text"} className={"outline-none border border-gray-400" +
                            " focus:border-primary rounded-lg w-full p-3"}/>
                </div>
                <div className={"form-control mt-5"}>
                    <textarea placeholder={"Message"} rows={"8"}  className={"outline-none border border-gray-400" +
                        " focus:border-primary rounded-lg w-full p-3"}></textarea>
                </div>
                <div className={"flex justify-center mt-10"}>
                    <button className="btn bg-primary hover:bg-neutral text-base-100 btn-xs sm:btn-sm md:btn-md lg:btn-lg">Send A Message</button>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;