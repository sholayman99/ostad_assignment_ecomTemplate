import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <section className={"flex flex-col items-center my-24 justify-center gap-8"}>

           <h1 className={"text-7xl font-semibold text-neutral"}>Oops!</h1>
           <h1 className={"text-5xl font-semibold text-neutral"}>Page not found!</h1>
           <p>You could either go back or go to homepage</p>

           <div>
             <Link to={"/"} > <button className={"btn btn-primary mr-2 hover:btn-neutral rounded-full btn-wide"}>GO BACK</button></Link>
             <Link to={"/"}>  <button className={"btn btn-neutral hover:btn-primary rounded-full btn-wide"}>HOMEPAGE</button></Link>
           </div>
        </section>
    );
};

export default NotFoundPage;