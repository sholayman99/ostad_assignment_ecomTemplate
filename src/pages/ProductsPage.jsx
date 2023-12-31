import React from 'react';
import ProductBanner from "../components/Products/ProductBanner.jsx";
import AllProducts from "../components/Shared/AllProducts.jsx";
import ReviewField from "../components/Products/ReviewField.jsx";
import ProductReview from "../components/Products/ProductReview.jsx";

const ProductsPage = () => {
    return (
        <div>
           <ProductBanner />
           <AllProducts />
            <ProductReview />
            <ReviewField />
        </div>
    );
};

export default ProductsPage;