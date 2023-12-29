import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Contacts from "./pages/Contacts.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Carts from "./pages/Carts.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import Reviews from "./pages/Reviews.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import ThankYou from "./pages/ThankYou.jsx";
import Blogs from "./pages/Blogs.jsx";
import SearchResultPage from "./pages/SearchResultPage.jsx";
import PrivacyTermsPage from "./pages/PrivacyTermsPage.jsx";
import FaqPage from "./pages/FaqPage.jsx";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<HomePage />} />
                    <Route path={"/products"} element={<ProductsPage />} />
                    <Route path={"/contacts"} element={<Contacts />} />
                    <Route path={"/not-found"} element={<NotFoundPage />} />
                    <Route path={"/carts"} element={<Carts />} />
                    <Route path={"/checkout"} element={<CheckOut />} />
                    <Route path={"/reviews"} element={<Reviews />} />
                    <Route path={"/registration"} element={<RegistrationPage />} />
                    <Route path={"/thank-you"} element={<ThankYou />} />
                    <Route path={"/blogs"} element={<Blogs />} />
                    <Route path={"/search-result"} element={<SearchResultPage />} />
                    <Route path={"/privacy-terms"} element={<PrivacyTermsPage />} />
                    <Route path={"/faq"} element={<FaqPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default App;