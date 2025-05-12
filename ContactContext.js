import React, { createContext, useState, useContext } from "react";

// Create the context
const ContactContext = createContext();

// Create a provider component
export function ContactProvider({ children }) {
  const [contactDetails, setContactDetails] = useState(null);

  return (
    <ContactContext.Provider value={{ contactDetails, setContactDetails }}>
      {children}
    </ContactContext.Provider>
  );
}

// Custom hook to use the ContactContext
export function useContact() {
  return useContext(ContactContext);
}