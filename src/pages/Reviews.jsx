import React from 'react';

const Reviews = () => {
    return (
        <div className={"my-24 flex flex-col justify-center gap-5 items-center"}>
            <h2 className={"text-2xl font-semibold"}>Send your feedback</h2>
            <div className="rating">
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
            </div>
            <textarea placeholder={"Write Your Feedback" } className={"outline-none border border-gray-400" +
                " focus:border focus:border-primary p-2 "} rows={'5'} cols="40" ></textarea>
        </div>
    );
};

export default Reviews;