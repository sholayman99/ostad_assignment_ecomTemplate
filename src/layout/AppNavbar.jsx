import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";

const AppNavbar = () => {

    const [color,setColor] =useState(false);

    const changeBg =() => {
        if(window.scrollY >= 90){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeBg);

    const navList = (
        <>
            <li>
                <NavLink style={{fontWeight:"600", fontSize:"16px"}}  to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink style={{fontWeight:"600", fontSize:"16px"}}  to={"/products"}>Products</NavLink>
            </li>
            <li>
                <NavLink style={{fontWeight:"600", fontSize:"16px"}} to={"/carts"}>Carts</NavLink>
            </li>
            <li>
                <NavLink style={{fontWeight:"600", fontSize:"16px"}} to={"/contacts"}>Contacts</NavLink>
            </li>
            <li>
                <NavLink style={{fontWeight:"600", fontSize:"16px"}} to={"/blogs"}>Blogs</NavLink>
            </li>
            <li>
                <NavLink style={{fontWeight:"600", fontSize:"16px"}} to={"/registration"}>Login</NavLink>
            </li>
        </>
    )



    return (
        <div className={color==true?"active-navbar navbar z-50 fixed top-0":"navbar notActive fixed top-0"}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navList}
                    </ul>
                </div>
                <Link to={"/"} className="btn btn-ghost font-bold text-2xl">Smart</Link>
            </div>
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navList}
                </ul>
            </div>

        </div>
    );
};

export default AppNavbar;