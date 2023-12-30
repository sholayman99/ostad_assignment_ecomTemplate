import React from 'react';
import ProductBanner from "../components/Products/ProductBanner.jsx";
import AllProducts from "../components/Shared/AllProducts.jsx";

const ProductsPage = () => {
    return (
        <div>
           <ProductBanner />
           <AllProducts />
        </div>
    );
};

export default ProductsPage;