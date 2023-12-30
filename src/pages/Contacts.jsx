import React from 'react';
import ContactBanner from "../components/Contacts/ContactBanner.jsx";
import ContactForm from "../components/Contacts/ContactForm.jsx";
import ContactInfo from "../components/Contacts/ContactInfo.jsx";

const Contacts = () => {
    return (
        <div>
          <ContactBanner />
          <ContactForm />
          <ContactInfo />
        </div>
    );
};

export default Contacts;