import React from 'react';
import {FaFacebookF, FaInstagram, FaTiktok, FaTwitter} from "react-icons/fa";
import {Link} from "react-router-dom";


const Footer = () => {
    return (
        <footer className={"bg-[#F2F8FD] grid grid-cols-4 mt-24 gap-10 px-10 py-20"}>
            {/*logo--part*/}
           <div className={"flex flex-col items-start text-justify justify-evenly gap-3"}>
               <h1 className={"text-4xl font-extrabold"}>Smart</h1>
               <p>Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
               <div className={"flex items-start gap-3 justify-evenly"}>
                  <div className={"bg-gray-700 text-base-100 w-10 h-10 rounded-lg flex items-center justify-center"}> <FaFacebookF /></div>
                  <div className={"bg-gray-700 text-base-100 w-10 h-10 rounded-lg flex items-center justify-center"}> <FaTwitter /></div>
                  <div className={"bg-gray-700 text-base-100 w-10 h-10 rounded-lg flex items-center justify-center"}><FaInstagram /></div>
                  <div className={"bg-gray-700 text-base-100 w-10 h-10 rounded-lg flex items-center justify-center"}> <FaTiktok /></div>
               </div>
           </div>

            {/*Services--part*/}
            <div className={"flex flex-col items-start text-justify justify-evenly gap-5"}>
              <h2 className={"text-xl font-bold"}>Services</h2>
               <div className={"flex flex-col gap-1"}>
                   <p className={"hover:text-primary "}> <Link  to={"/"}>My Account</Link> </p>
                   <p className={"hover:text-primary "}> <Link to={"/"}>Contact</Link> </p>
                   <p className={"hover:text-primary "}> <Link to={"/"}>Shopping Cart</Link> </p>
                   <p className={"hover:text-primary "}> <Link to={"/privacy-terms"}>Privacy&Terms</Link> </p>
                   <p className={"hover:text-primary "}> <Link to={"/faq"}>Faq</Link> </p>
               </div>
            </div>

            {/*My Account part*/}
            <div className={"flex flex-col items-start justify-evenly gap-5"}>
                <h2 className={"text-xl font-bold"}>My Account</h2>
                <div className={"flex flex-col gap-1"}>
                    <p className={"hover:text-primary "}> <Link  to={"/"}>My Account</Link> </p>
                    <p className={"hover:text-primary "}> <Link to={"/"}>Contact</Link> </p>
                    <p className={"hover:text-primary "}> <Link to={"/"}>Shopping Cart</Link> </p>
                    <p className={"hover:text-primary "}> <Link to={"/"}>Shop</Link> </p>
                    <p className={"hover:text-primary "}> <Link to={"/"}>Services Login</Link> </p>
                </div>
            </div>

            {/*Contact Info part*/}
            <div className={"flex flex-col items-start justify-evenly gap-5"}>
                <h2 className={"text-xl font-bold"}>Contact Info</h2>
                <div className={"flex flex-col gap-1"}>
                    <p className={"hover:text-primary "}> Address: Your Address Goes Here.</p>
                    <p className={"hover:text-primary "}> Phone/Fax: 0123456789 </p>
                    <p className={"hover:text-primary "}> <Link to={"/"}>Shopping Cart</Link> </p>
                    <p className={"hover:text-primary "}> Email: demo@example.com </p>
                    <p className={"hover:text-primary "}> demo@example.com</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;