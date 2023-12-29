import React from 'react';
import Banner from "../components/Home/Banner.jsx";
import Special from "../components/Home/Special.jsx";
import NewProducts from "../components/Home/NewProducts.jsx";


const HomePage = () => {
    return (
        <div>
         <Banner />
         <Special />
          <NewProducts />
        </div>
    );
};

export default HomePage;