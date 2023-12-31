import React, {useEffect, useState} from 'react';
import {findReviews} from "../../apiRequest/apiRequest.js";
import {Link} from "react-router-dom";

const ProductReview = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        (async()=>{
            let res = await findReviews();
            setReviews(res);
        })()
    }, []);

    return (
        <div className={"border-2 p-10 m-20 flex flex-col gap-10  border-gray-300"}>

                {
                    reviews.slice(0,3).map((r,i)=> <div className={"flex  flex-col gap-2"} key={i.toString()}>
                    <h2 className={"text-lg font-semibold"}> {r['name']} </h2>
                     <p> <h2> {r['details']} </h2></p>
                        <div className="rating">

                            <input type="radio"  name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio"  name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio"  name="rating-4" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio"  name="rating-4" className="mask mask-star-2 bg-orange-400" />

                        </div>

                    </div>)
                }

            <div>
               <Link to={"/reviews"}> <button className={"btn btn-wide btn-neutral hover:btn-primary"}>See All Reviews</button></Link>
            </div>

        </div>
    );
};

export default ProductReview;