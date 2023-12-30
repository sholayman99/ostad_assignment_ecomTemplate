import React from 'react';
import Banner from "../components/Home/Banner.jsx";
import Special from "../components/Home/Special.jsx";
import NewProducts from "../components/Home/NewProducts.jsx";
import Poster from "../components/Home/Poster.jsx";
import Speciality from "../components/Home/Speciality.jsx";


const HomePage = () => {
    return (
        <div>
         <Banner />
         <Special />
         <NewProducts />
         <Poster />
         <Speciality />
        </div>
    );
};

export default HomePage;