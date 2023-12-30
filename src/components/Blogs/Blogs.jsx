import React, {useEffect, useState} from 'react';
import {findBlogs} from "../../apiRequest/apiRequest.js";
import {FaCalendar, FaUser} from "react-icons/fa";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])

    useEffect(() => {
        (async()=>{
            let res = await findBlogs();
            setBlogs(res);
        })()
    }, []);
    return (
        <section className="grid grid-cols-3 gap-10 p-10">

               {
                blogs.map((blog,i) => <div className="card  glass">
                    <figure><img src={blog['img']} alt="car!"/></figure>
                    <div className="card-body">
                        <div className={"flex items-center justify-between"}>
                           <div className={"flex items-center gap-1"}>
                               <FaCalendar />
                               <h3 className={"font-bold"}> {blog['date']} </h3>
                           </div>

                            <div className={"flex items-center gap-1"}>
                                <FaUser />
                                <h3 className={"font-bold"}> {blog['writer']} </h3>
                            </div>
                        </div>
                        <h2 className="card-title">{blog['title']} </h2>
                        <p> {blog['description']} </p>
                        <div className="card-actions justify-start">
                            <button className="btn text-base-100 rounded-xl bg-[#4E4E4E] hover:btn-primary">Read More</button>
                        </div>
                    </div>
                </div> )
               }

        </section>
    );
};

export default Blogs;