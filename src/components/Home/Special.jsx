import React from 'react';

const Special = () => {
    return (
        <section className={"grid gap-5 my-20 px-10 text-base-100 grid-cols-2"}>
            <div className={"p-8 flex flex-col gap-10"}
                style={{backgroundImage: 'url(https://htmldemo.net/hmart/hmart/assets/images/banner/6.webp)',
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    height:"auto"
                }}>
              <div className={"flex flex-col gap-4"}>
                  <h2 className={"text-3xl font-bold font-[sans-serif]"}>Speaker</h2>
                  <h3 className={"text-xl font-semibold font-[sans-serif]"}>From $69.00</h3>
              </div>
              <button className={"btn btn-primary rounded-xl w-[25%] hover:btn-neutral"}>Shop Now</button>

            </div>
            <div className={"p-8 flex flex-col gap-10"}
                style={{backgroundImage: 'url(https://htmldemo.net/hmart/hmart/assets/images/banner/7.webp)',
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    height:"auto"}}>

              <div className={"flex flex-col gap-4"}>
                  <h2 className={"text-3xl font-bold font-[sans-serif]"}>Smartphone</h2>
                  <h3 className={"text-xl font-semibold font-[sans-serif]"}>From $95.00</h3>
              </div>
                <button className={"btn btn-primary rounded-xl w-[25%] hover:btn-neutral"}>Shop Now</button>
            </div>
        </section>
    );
};

export default Special;