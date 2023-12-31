import React, {useEffect, useState} from 'react';
import {findReviews} from "../apiRequest/apiRequest.js";
import AllReviews from "../components/Reviews/AllReviews.jsx";
import ReviewBanner from "../components/Reviews/ReviewBanner.jsx";
import ProductReview from "../components/Products/ProductReview.jsx";

const ReviewPage = () => {
    const [reviews,setReviews] = useState([]);

    useEffect(() => {
        (async()=>{
            let res = await findReviews();
            setReviews(res);
        })()
    }, []);
    return (
        <>
        <ReviewBanner />
            <div className={"grid grid-cols-4 m-10 gap-10"}>
                {
                    reviews.map((review,i)=> <AllReviews key={i.toString()} review={review} /> )
                }
            </div>
        </>
    );
};

export default ReviewPage;