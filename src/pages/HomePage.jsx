import React from 'react';
import Banner from "../components/Home/Banner.jsx";
import Special from "../components/Home/Special.jsx";
import AllProducts from "../components/Shared/AllProducts.jsx";
import Poster from "../components/Home/Poster.jsx";
import Speciality from "../components/Home/Speciality.jsx";


const HomePage = () => {
    return (
        <div>
         <Banner />
         <Special />
         <AllProducts />
         <Poster />
         <Speciality />
        </div>
    );
};

export default HomePage;