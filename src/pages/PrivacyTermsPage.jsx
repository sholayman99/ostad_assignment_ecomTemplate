import React from 'react';

const PrivacyTermsPage = () => {
    return (
        <div className={"my-24"}>
            <div className="bg-gray-100 p-8">
                <div className="max-w-2xl mx-auto bg-white p-8 shadow-md rounded-md">
                    <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
                    <p className="mb-4">
                        Welcome to our e-commerce website's Privacy Policy. Your privacy is important to us.
                    </p>

                    <h2 className="text-lg font-bold mb-2">1. Information We Collect</h2>
                    <p className="mb-4">
                        We collect information you provide directly to us, such as your name, address, email address, and payment information when you make a purchase.
                    </p>

                    <h2 className="text-lg font-bold mb-2">2. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to process orders, send order confirmations, and communicate with you about your purchases.
                    </p>

                    {/* Add more sections as needed */}

                    <h2 className="text-lg font-bold mb-2">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this Privacy Policy, please contact us at support@example.com.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyTermsPage;