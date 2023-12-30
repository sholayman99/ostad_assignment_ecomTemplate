import React, {useEffect, useState} from 'react';
import {findProducts} from "../../apiRequest/apiRequest.js";

const AllProducts = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        (async()=>{
            let res = await findProducts();
            setProducts(res);
        })()
    }, []);
    return (
        <section className={"font-[sans-serif]  my-10"}>
          <div className={"text-center flex flex-col gap-3 mb-"}>
              <h1 className={"text-5xl text-neutral font-bold"}>New Products</h1>
              <p className={"text-gray-500 "}>There are many variations of passages of Lorem Ipsum available</p>
          </div>
            <div className={"grid grid-cols-4 gap-5 my-10 px-10"}>
                {
                 products.map((product,i) => <div key={i.toString()} className="card bg-base-100 border-2 border-gray-300 shadow-lg">
                     <figure className="px-10 pt-10">
                      <img src= {product['img']} alt= {product['name']} className="rounded-xl hover:scale-125 transition-transform 0.3s ease-linear " />
                      </figure>
                      <div className="card-body items-center text-center">
                          <h3 className={"text-gray-600"}>{product['shortDet']} </h3>
                          <h2 className="text-lg font-bold">{product['name']}</h2>
                          <h2 className={"font-semibold text-xl text-gray-500"}>{product['price']} </h2>
            </div>
            </div>)
                }
            </div>
        </section>
    );
};

export default AllProducts;