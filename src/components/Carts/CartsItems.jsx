import React, {useEffect, useState} from 'react';
import {findProducts} from "../../apiRequest/apiRequest.js";
import { FaPenAlt} from "react-icons/fa";
import { ImCross } from "react-icons/im";
import {Link} from "react-router-dom";


const CartsItems = () => {
    const [products,setProducts] = useState([])

    useEffect(() => {
        (async()=>{
            let res = await findProducts();
            setProducts(res);
        })()
    }, []);
    return (
        <main className={"my-20 mx-10  font-[sans-serif]"}>
           <h2 className={"text-2xl m-3 font-bold"}>Your cart items</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className={"text-neutral"}>
                    <tr>
                        <th>IMAGE</th>
                        <th>PRODUCT NAME</th>
                        <th>UNTIL PRICE</th>
                        <th>QTY</th>
                        <th>SUBTOTAL</th>
                        <th>ACTION</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       products.slice(0,3).map((p,i) =><tr key={i.toString()}>
                           <td>
                               <div className="avatar">
                                   <div className="mask mask-squircle w-12 h-12">
                                       <img src={p['img']} alt="Avatar Tailwind CSS Component" />
                                   </div>
                               </div>
                           </td>
                           <td>
                              <h3>{p['name']} </h3>
                           </td>
                           <td>{p['price']} </td>
                           <th className={"flex justify-start items-center"}>
                               <button className="btn border border-gray-400 btn-ghost btn-sm">-</button>
                               <p className={"px-4 border-gray-400 border py-1.5 rounded-lg"}>1</p>
                               <button className="btn border border-gray-400 btn-ghost btn-sm">+</button>
                           </th>
                           <th> {p['price']} </th>
                               <th className={"flex justify-start items-center"}>
                                   <button className="btn  btn-ghost btn-xs"> <ImCross /> </button>
                                   <button className="btn  btn-ghost btn-xs"><FaPenAlt /> </button>
                               </th>

                       </tr>)
                    }

                    </tbody>

                </table>
            </div>

            <div className={"my-10 flex justify-between items-center"}>
                <div>
                    <button className={"btn bg-[#EBEBEB] btn-wide hover:bg-primary hover:text-base-100 " +
                        "uppercase rounded-none"}>continue shopping</button>
                </div>

                <div className={"flex items-center gap-10"}>
                    <button className={"btn bg-[#EBEBEB] btn-wide hover:bg-primary hover:text-base-100 " +
                        "uppercase rounded-none"}>update shopping cart</button>
                    <button className={"btn bg-primary btn-wide hover:bg-neutral text-base-100 " +
                        "uppercase rounded-none"}>clear shopping cart</button>
                </div>

            </div>

            <div className={"flex justify-end"}>
                <Link to={"/checkout"}>
                    <button className={"btn btn-neutral btn-wide hover:bg-base-100 hover:text-neutral rounded-none" +
                    " uppercase"}> proceed to checkout </button>
                </Link>

            </div>

        </main>
    );
};

export default CartsItems;